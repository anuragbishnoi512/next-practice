import React from 'react'
import { useState } from 'react'

const Validation = () => {
    const formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const [formValue, setFormValue] = useState(formData)
    const [error,setError] =useState (false)
    const submitHandler = (e) => {
        e.preventDefault()
        setError(true)
        
    }
   
        
    console.log("value", formValue)

    return (
        <div className='max-w-[500px] mx-auto mt-[100px]'>
            <div className='gap-2 flex flex-col border-2 border-black p-4'>
                <div className='outline-none border-2 border-gray-500 p-5 w-full'>
                    <input type="text" placeholder='Name' className='outline-none' onChange={(e) => setFormValue({ ...formValue, name: e.target.value })} value={formValue.name} />
                    <p className='text-red-700 '>{ error && formValue.name === "" ? "name is requried" :""}</p>
                </div>
                <div className='outline-none border-2 border-gray-500 p-5 w-full'>
                    <input type="email" placeholder='Email' className='outline-none' onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} value={formValue.email} />
                </div>
                <div className='outline-none border-2 border-gray-500 p-5 w-full'>
                    <input type="password" placeholder='Password' className='outline-none' onChange={(e) => setFormValue({ ...formValue, password: e.target.value })} value={formValue.password} />
                </div>
                <div className='outline-none border-2 border-gray-500 p-5 w-full'>
                    <input type="password" placeholder='Confirm Password' className='outline-none' onChange={(e) => setFormValue({ ...formValue, confirmPassword: e.target.value })} value={formValue.confirmPassword} />
                </div>
                <button className='font-semibold border-2 border-gray-500 p-5 w-full' onClick={(e) => submitHandler(e)}>Submit</button>
            </div>
        </div>
    )
}

export default Validation