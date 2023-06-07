import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ImageUpload from './ImageUpload'
import './index.css'


const Edit = () => {
    const {
    register,
    handleSubmit,
    formState: { errors }
    } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    }

  return (
    <div>
      <form className='container w-3/4 mt-20 mx-auto px-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-8'>
            <ImageUpload/>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
            <input type="name" name="name" id="name" className='block py-2.5 px-0 w-full font-bold text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='' {...register ("name", {required: true})}/>
            {errors.name?.type === "required" && (
                <p className='errorMsg text-red-600'>
                    Name is required!
                </p>
            )}
            <label htmlFor="name" className='peer-focus:font-medium absolute duration-300 font-bold text-md text-gray-600 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Name</label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
            <input type="email" name="email" id="email" className='block py-2.5 px-0 w-full font-bold text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='' {...register ( "email", {required: true, pattern: /^[^@]+@[^@ ]+\.[^@ .]{2,}$/})} />
            {errors.email?.type === "required" && (
            <p className='errorMsg  text-red-600'>
                Email is required!
            </p>
            )}
            {errors.email?.type === "pattern" && (
            <p className='errorMsg  text-red-600'>
                Email is not valid!
            </p>
            )}
            <label htmlFor="email" className='peer-focus:font-medium absolute duration-300 font-bold text-md text-gray-600 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
            <input type="PhoneNumber" name="PhoneNumber" id="PhoneNumber" className='block py-2.5 px-0 w-full font-bold text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='' {...register ("phoneNumber", {required: true})} />
            {errors.phoneNumber?.type === "required" && (
                <p className='errorMsg  text-red-600'>
                    Phone number is required!
                </p>
            )}
            <label htmlFor="phoneNumber" className='peer-focus:font-medium absolute duration-300 font-bold text-md text-gray-600 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Phone Number</label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
            <input type="password" name="password" id="password" className='block py-2.5 px-0 w-full font-bold text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='' {...register ("password", { required: true, minLength: 6})} />
            { errors.password?.type === "required" && (
            <p className='errorMsg  text-red-600'>
                Password is required!
            </p>
            )}
            {errors.password?.type === "minLength" && (
            <p className='errorMsg  text-red-600'>
                Password should be at-least 4 characters.
            </p>
            )}
            <label htmlFor="password" className='peer-focus:font-medium absolute duration-300 font-bold text-md text-gray-600 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Change Password</label>
        </div>
        <button type='submit' className='w-full bg-blue-600 h-10 rounded-full text-white hover:bg-blue-400 font-bold '>
            Save
        </button>
      </form>
    </div>
  )
}

export default Edit
