import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';

export const CompleteModal = () => {
    const {profile, handleSetProfile} = useContext(AuthContext);
    const { register, handleSubmit } = useForm()
    const onSubmit: SubmitHandler<any> = async (data: any) => {
        console.log(data);
        const id = Math.floor(Math.random() * 30);
        const newUser = {
            ...profile,
            bio: data.bio,
            category: data.category || 'contributor',
        }
        
        handleSetProfile(newUser);
        console.log('profile', profile);
        const res = await axios.post('https://coopensciense.targino.com.br/api/complete_user', {
            bio: data.bio,
            category: data.category || 'contributor',
            id: id
        })
        const resData = await res.data;
        console.log(resData);
    };
    return (
        <section className='p-10 w-[70vw] h-[80vh] bg-white fixed shadow-2xl rounded-2xl z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <h1 className='font-bold font-poppins text-3xl '>Complete your profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-auto flex items-start pt-8 justify-center">
                <div className="col-1 flex-1 text-left">
                <div className="form flex flex-col items-start px-2 justify-center gap-2">
                <div className="input-grp w-full flex flex-col items-start justify-center gap-1 px-4">
                    <label className='font-bold font-poppins text-lg' htmlFor="Username">username</label>
                    <input {...register('name')} disabled value={profile?.name} className="p-3 border w-full border-purple-500 shadow-lg rounded-md" id="Username" type="text"></input>
                </div>
                <div className="input-grp w-full flex flex-col items-start justify-center gap-1 px-4">
                    <label className='font-bold font-poppins text-lg' htmlFor="email">email</label>
                    <input {...register('email')} disabled value={profile?.email} className="p-3 border w-full border-purple-500 shadow-lg rounded-md" id="email" type="text"></input>
                </div>
                <div className="col-2flex flex-col items-center justify-center gap-2">
                    <h1 className='self-start pl-4 text-xl font-bold mt-6'>Description</h1>
                    <textarea {...register('bio')} className='mt-1 ml-4 border p-3 border-purple-500 rounded-md shadow-xl' name="bio" id="" cols={47} rows={5}></textarea>
                </div>
            </div>
                </div>
                

                <div className="input-grp flex-1 w-full flex flex-col items-center justify-end gap-1 px-4">
                    <img src={profile?.picture} className='w-32 h-32 rounded-full' />
                    <div className="input-grp w-full flex flex-row items-center justify-center gap-1 mt-5">
                        <input value="contributor" className='w-[15px] h-[15px]' id="type_contributor" type="radio" name="type" />
                        <label htmlFor="type_contributor">I am a contributor</label>
                    </div>
                    <div className="input-grp w-full flex flex-row items-center justify-center gap-1">
                        <input value="creator" className='w-[15px] h-[12px]' type="radio" name="type" id="type_creator"/>
                        <label htmlFor="type_creator">I am a creator</label>

                    </div>
                    <button className='bg-green-500 px-6 py-2 mt-28 rounded-lg text-white w-72 justify-self-end'>Submit</button>
                </div>
            </form>
    </section>
    )
}