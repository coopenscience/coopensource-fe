import React, { useState, useEffect, createContext } from 'react';
import { OverridableTokenClientConfig, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

type User = {
    email: string;
    username: string;
    password: string;
    access_token: string;
  } 
  
type Profile = {
    name: string;
    email: string;
    picture: string;
  }

type AuthContextType = {
    user : User | null;
    profile : Profile | null;
    logOut: () => void;
    login: (overrideConfig?: OverridableTokenClientConfig | undefined) => void;

}

  
function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export const AuthContext = createContext({} as AuthContextType);

function AuthContextComponent({children}: {children:React.ReactNode}){
    const [ user, setUser ] = useState<User | null | Omit<any, "error" | "error_description" | "error_uri"> | any>(null);
    const [ profile, setProfile ] = useState<Profile | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse) ,
        onError: (error) => console.log('Login Failed:', error)
    });
    // check if user is already logged in, if not, get user data and set user state
    useEffect(() => {
          
            if (user) {
                if (user.access_token) {
                    console.log(user.access_token);
                    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                            headers: {
                                Authorization: `Bearer ${user.access_token}`,
                                Accept: 'application/json'
                            }
                        })
                        .then((res: any) => {
                            setProfile(res.data);
                            document.cookie = "user_access_token=" + user.access_token
                            // localStorage.setItem('user_access_token', user.access_token);
                            console.log(user.access_token);
                        })
                        .catch((err: any) => console.log(err));
                }
            } else {
                if (getCookie('user_access_token') != null) {
                  axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${getCookie('user_access_token')}`, {
                    headers: {
                        Authorization: `Bearer ${getCookie('user_access_token')}`,
                        Accept: 'application/json'
                    }
                })
                .then((res: any) => {
                    setProfile(res.data);
                    // localStorage.setItem('user_access_token', user.access_token);
                    // console.log(user.access_token);
                })
                .catch((err: any) => console.log(err));
                }
            }
        }, [user]);

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        document.cookie = "user_access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        setProfile(null);
    };

    return (        
        <AuthContext.Provider value={{logOut, login, user, profile}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextComponent;