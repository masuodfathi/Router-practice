import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [serachParams,setSearchParams] = useSearchParams();
  const ActiveUsers = serachParams.get('filter') === 'Active';
  return (
    <>
        <ul className='userslist'>
            <li>Masuod</li>
            <li>Melika</li>
            <li>Milad</li>
        </ul>
        <di>
            <Outlet/>
        </di>
        <div>
            <button onClick={()=>setSearchParams({filter:'Active'})}>Active Users</button>
            <button onClick={()=>setSearchParams({})}>Reset filter</button>
        </div>
        {ActiveUsers?
        <div>
            <ul>
                <li>This is a list of active users</li>
            </ul>
        </div>
        :
        <p>All users</p>}
    </>
  )
}
