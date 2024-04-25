import React, { Profiler, useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);

    if(!user ) return <span className='flex flex-wrap justify-center items-center p-4 bg-orange-400 mx-auto text-black text-2xl font-semibold w-1/3 rounded-xl' >Please Login</span>

    return <div className='flex flex-wrap justify-center items-center p-4 bg-orange-400 mx-auto text-black text-2xl font-semibold w-1/3 rounded-xl'>Welcome {user.userName} </div>
}

export default Profile