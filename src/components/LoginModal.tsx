// import { FunctionComponent } from "react";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const LoginModal = () => {
    const {login} = useContext(AuthContext);
    return (
        <section className='p-6 w-[30rem] h-[90vh] bg-white fixed shadow-2xl rounded-2xl z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <form className='h-auto font-poppins font-normal'>
            <h1 className='font-bold font-poppins text-2xl '>Login</h1>
            <img onClick={() => login()}  src='/googleloginbtn.png' className="cursor-pointer w-96 mx-auto mt-6" alt="" />

                <div className='w-96 mx-auto h-[.5px] my-5 bg-black'></div>
            <div className="form flex flex-col items-start px-2 justify-center gap-2">
                <div className="input-grp w-full flex flex-col items-start justify-center gap-1 px-4">
                    <label className='font-bold font-poppins text-lg' htmlFor="email">email</label>
                    <input className="p-3 border w-full border-purple-500 shadow-lg rounded-md" id="email" type="text"></input>
                </div>
                <div className="input-grp w-full flex flex-col items-start justify-center gap-1 px-4">
                    <label className='font-bold font-poppins text-lg' htmlFor="password">password</label>
                    <input className="p-3 border w-full border-purple-500 shadow-lg rounded-md" id="password" type="text"></input>
                </div>
                <div className="input-grp w-full flex flex-row items-center justify-start gap-1 px-4">
                    <button className='cursor-pointer h-12 w-full rounded-lg transition-all font-poppins font-bold hover:bg-green-600 bg-green-500 text-white'>Login</button>
                </div>
            </div>
        </form>
    </section>
    )
}