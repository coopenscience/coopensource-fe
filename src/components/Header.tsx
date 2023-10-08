import { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import { RegisterModal } from './RegisterModal';
import { LoginModal } from './LoginModal';
import { UserCircle } from "@phosphor-icons/react";
import { Tooltip } from 'react-tooltip';
import { CompleteModal } from './CompleteModal';


export const Header = () => {
    const {profile,handleShowRegister, showRegister, showLogin, handleShowLogin} = useContext(AuthContext);
    const state = profile ? 'logged' : 'not_logged';
    if (state == 'logged') {
        console.log(profile?.bio)
        if (profile?.bio !== undefined && profile?.bio !== null) {
            return (
                <header className=' bg-gray-400 border shadow-xl flex-col sm:flex-row w-full h-24 absolute top-0 left-0 flex items-center justify-between px-32'>
                    <img className='w-20' src='/logo.png'></img>
                    <div id="action" className='flex items-center justify-center gap-6'>
                    <a data-tooltip-id="my-tooltip" data-tooltip-content={profile?.name}>
                        <button className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold flex flex-row-reverse items-center justify-center gap-1">
                            {/* <UserCircle size={64} /> */}
                            {profile?.picture ? (
                                <img src={profile?.picture} className='w-16 h-16 rounded-full' />
                            ) : (
                                <UserCircle size={64} />
                            )}
                            {/* {profile?.name.split(' ')[0]} */}
                        </button>
                    </a>
                    <Tooltip id="my-tooltip" />
                        {/* <button onClick={() => logOut()} className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Logout</button> */}
                  </div>
                </header>
            )
        } else {
            return (
            <>
            <CompleteModal />
            <span className='fixed top-0 left-0  z-40 bg-gray-500/100 w-full h-full'></span>
            <header className=' bg-gray-400 shadow-xl border flex-col sm:flex-row w-full h-24 absolute top-0 left-0 flex items-center justify-between px-32'>
            <img className='w-20' src='/logo.png'></img>
            <div id="action" className='flex items-center justify-center gap-6'>
                <button onClick={() => handleShowRegister()} className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Register</button>
                <button className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Login</button>
            </div>
            </header>
            </>
            )
        }
    } else {
        if (showRegister) {
            return (
                <>
                    <RegisterModal />
                    <span className='fixed top-0 left-0  z-40 bg-gray-500/50 w-full h-full'></span>
                    <header className=' bg-gray-400 shadow-xl border flex-col sm:flex-row w-full h-24 absolute top-0 left-0 flex items-center justify-between px-32'>
                    <img className='w-20' src='/logo.png'></img>
                    <div id="action" className='flex items-center justify-center gap-6'>
                        <button onClick={() => handleShowRegister()} className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Register</button>
                        <button className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Login</button>
                    </div>
                    </header>
                </>
            )
        } else if (showLogin) {
           return (
            <>
            <LoginModal />
            <span className='fixed top-0 left-0  z-40 bg-gray-500/50 w-full h-full'></span>
            <header className=' bg-gray-400 shadow-xl border flex-col sm:flex-row w-full h-24 absolute top-0 left-0 flex items-center justify-between px-32'>
            <img className='w-20' src='/logo.png'></img>
            <div id="action" className='flex items-center justify-center gap-6'>
                <button onClick={() => handleShowRegister()} className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Register</button>
                <button className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Login</button>
            </div>
            </header>
            </>
           )
        } else {
            return (
               <header className=' bg-gray-400 border shadow-xl flex-col sm:flex-row w-full h-24 absolute top-0 left-0 flex items-center justify-between px-32'>
                    <img className='w-20' src='/logo.png'></img>
                    <div id="action" className='flex items-center justify-center gap-6'>
                        <button onClick={() => handleShowRegister()} className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Register</button>
                        <button onClick={() => handleShowLogin()}className="hover:scale-105 cursor-pointer text-xl font-poppins font-extrabold">Login</button>
                    </div>
               </header>
            )
        }
    }
}