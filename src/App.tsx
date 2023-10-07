
import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
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

function getCookie(cname) {
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

function App() {
    const [ user, setUser ] = useState<User | null>();
    const [ profile, setProfile ] = useState<Profile | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse); console.log(codeResponse)},
        onError: (error) => console.log('Login Failed:', error)
    });

    // check if user is already logged in, if not, get user data and set user state
    useEffect(() => {
          
            if (user) {
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
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img className='w-96' src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile?.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
    );
}
export default App;

// import './App.css'
// import InfinityAnimatedIcon from './components/InfinityAnimatedIcon';

// // function App() {

// //   return (
// //     <>
// //     <InfinityAnimatedIcon />
// //     </>
// //   )
// // }

// // export default App


// import { GoogleLogin } from '@react-oauth/google';

// function App() {
//     const responseMessage = (response: any) => {
//         console.log('chegou aqui')
//         console.log(response);
//     };
//     const errorMessage = () => {
//         console.log('error');
//     };
//     return (
//         <div>
//             <InfinityAnimatedIcon />          
//             <h2>React Google Login</h2>
//             <br />
//             <br />
//             <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
//         </div>
//     )
// }
// export default App;