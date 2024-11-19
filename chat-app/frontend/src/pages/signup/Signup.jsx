import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // For outline version
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {

  const [input, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const { signup, loading } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender })

  }

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(input)
    await signup(input)
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-full sm:min-w-[320px] md:min-w-[400px] mx-auto'>
      <div className='w-full p-6 sm:p-4 md:p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp <span className='text-blue-500'>Chat App</span>
        </h1>

        <form onSubmit={handleSubmit} className='w-full'>
          {/* Full Name */}
          <div className='mb-4'>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type="text"
              placeholder='Enter Full name'
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* Username */}
          <div className='mb-4'>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type="text"
              placeholder='Enter username'
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <div className='flex items-center justify-between'>
              <input
                type={visiblePassword ? 'text' : 'password'}
                placeholder='Enter password'
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                className='w-full input input-bordered h-10'
              />
              <button type='button' onClick={togglePasswordVisibility}>
                {visiblePassword ? (
                  <EyeSlashIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <EyeIcon className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className='mb-4'>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <div className='flex items-center justify-between'>
              <input
                type={visibleConfirmPassword ? 'text' : 'password'}
                placeholder='Enter password again'
                value={input.confirmPassword}
                onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                className='w-full input input-bordered h-10'
              />
              <button type='button' onClick={toggleConfirmPasswordVisibility}>
                {visibleConfirmPassword ? (
                  <EyeSlashIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <EyeIcon className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Gender Checkbox */}
          <div className='mb-4'>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />
          </div>

          {/* Already have an account Link */}
          <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

          {/* SignUp Button */}
          <div>
            <button
              type='submit'
              className='btn btn-block btn-sm mt-4 border border-slate-700'
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>





  )
}

export default Signup

