"use client";
import { submitAction } from '@/actions/form';
import { useState, useRef } from 'react';
import { FiUser, FiEye, FiEyeOff, FiLogIn} from 'react-icons/fi';

export default function Home() {
  const formRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    await submitAction(formData);
    formRef.current.reset();
  };

  return (
    <div class="absolute inset-0 -z-10  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm p-8 bg-slate-400 shadow-md rounded-lg">
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1 text-black">
            <label htmlFor="name" className="font-bold">Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full text-cen pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                <FiUser />
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-black">
            <label htmlFor="password" className="font-bold">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>
          </div>
          <div className='flex justify-center mx-auto'>
            <button
              type="submit"
              className="flex text-center w-2/2 px-4 py-2 text-white bg-blue-500 border border-transparent rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 justify-end items-center"
            >
              Submit
              <FiLogIn  className='ml-2'/>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
