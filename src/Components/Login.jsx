import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=> {
        e.preventDefault();
        setUser({userName,password})
    }
  return (
    
    <div >
        <div className='flex flex-wrap justify-center flex-col gap-3 items-center '>
        <div className='bg-gray-600 flex flex-col m-10 p-10 gap-2 '>

        <h1 className='flex items-center justify-center text-xl font-medium'>Login</h1>
        <input 
        className='text-black p-0.5'
        placeholder='username'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        type="text" />
        <input 
        className='text-black p-0.5'
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" />
        <button
        className='bg-blue-500 mx-auto py-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 font-medium' 
         onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Login