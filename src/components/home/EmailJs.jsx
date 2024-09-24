"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import BackToTop from '../common/BackToTop';

export const EmailJs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u1j3ssi', 'template_nte2gg6', form.current, {
                publicKey: 'JsCmS1sMdaVx8akaM',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className='h-screen bg-black'>
                <Link href="/">
                    <button className='border-2 p-[15px_40px] border-green-600 bg-green-500 hover:border-green-500 hover:bg-green-600 duration-300 text-white font-semibold text-xl'>back to home</button>
                </Link>
                <div className='flex justify-center items-center py-[70px] gap-2 flex-col'><h2 className='font-extrabold text-[45px] text-white'>Email Js</h2></div>
                <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center py-[50px] gap-2 flex-col border-2 rounded-2xl max-w-[500px] ml-[33%]'>
                    <div className='flex gap-2'>
                        <label className='border-2 p-[16px_50px] border-green-500 rounded-md font-bold text-white'>Name</label>
                        <input type="text" name="user_name" className='border-2 p-[16px_50px] border-green-500 rounded-md bg-transparent text-white' />
                    </div>
                    <div className='flex gap-2'>
                        <label className='border-2 p-[16px_50px] border-red-500 rounded-md font-bold text-white'>Email</label>
                        <input type="email" name="user_email" className='border-2 p-[16px_50px] border-red-500 rounded-md bg-transparent text-white' />
                    </div>
                    <div className='flex gap-2'>
                        <label className='border-2 p-[16px_50px] border-blue-500 rounded-md font-bold text-white'>Message</label>
                        <textarea name="message" className='border-2 p-[16px_50px] border-blue-500 rounded-md bg-transparent text-white' />
                    </div>
                    <input type="submit" value="Send" className='border-4 p-[16px_50px] border-gray-900 rounded-md hover:border-red-800 duration-300  hover:bg-white mt-[50px] text-white hover:text-black' />
                </form>
            </div>
            <div className='h-screen'></div>
            <BackToTop />
        </div>
    );
};
export default EmailJs