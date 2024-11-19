import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // For outline version
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';


const Login = () => {
  const [visible, setVisible] = useState(false);

  const [userName,setUserName] = useState("");
  const [password,setPassword] =useState("");


  function changeClickHandler() {
    setVisible(!visible)
  }

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
		e.preventDefault();
		await login(userName, password);
	};
  return (
    <div className='flex flex-col items-center justify-center min-w-full sm:min-w-[320px] md:min-w-[400px] mx-auto'>
    <div className='w-full p-6 sm:p-4 md:p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Login <span className='text-blue-500'>Chat App</span>
      </h1>
  
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='mb-4'>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter username'
            className='w-full input input-bordered h-10'
          />
        </div>
  
        <div className='mb-4'>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <div className='flex items-center justify-between'>
            <input
              type={visible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
            />
            <button
              type='button'
              onClick={changeClickHandler}
              className='ml-2'
            >
              {visible ? (
                <EyeSlashIcon className='w-6 h-6 text-gray-500' />
              ) : (
                <EyeIcon className='w-6 h-6 text-gray-500' />
              )}
            </button>
          </div>
        </div>
  
        <Link
          to={"/signup"}
          className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
        >
          {"Don't"} have an account?
        </Link>
  
        <div>
          <button
            type='submit'
            className='btn btn-block btn-sm mt-2'
            disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span> : 'Login'}
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default Login
