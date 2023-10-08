
import { useContext } from 'react';
import {AuthContext} from './contexts/AuthContext';

function App() {
    const { profile, login, logOut } = useContext(AuthContext);

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