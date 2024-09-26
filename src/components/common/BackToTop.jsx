"use client";
import React, { useEffect, useState } from 'react';

const BackToTop = () => {

    const [value, setvalue] = useState(false)
    const backToTopHandle = () => {
        window.scrollTo(top)
    }
    const scrollTop = () => {
        if (window.scrollY > 200) {
            setvalue(true);
        }
        else {
            setvalue(false);
        }
    }
    const scrollTo = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollTop);
        return () => {
            window.removeEventListener("scroll", scrollTop);
        }
    }, []);

    return (
        <div className='relative'>
            <button className=' text-black text-lg p-4 text-nowrap fixed bottom-0 right-0' onClick={backToTopHandle}>Back to Top</button>
        </div>
    );
}

export default BackToTop;
