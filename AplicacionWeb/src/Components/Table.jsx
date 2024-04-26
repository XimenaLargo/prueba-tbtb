import React, { useEffect, useState } from 'react'
import FilterTitle from './FilterTitle';

export default function Table() {

    const[data, setData] = useState([]);

    const getUsers = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data))
    
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <>
    <FilterTitle />
    <table className="table mt-3 p-3">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
        <tbody id="body-table" className='fw-light'>
            {data.map((user)=>(
                <tr key={user.id}>
                    <th className='fw-light'>{user.id}</th>
                    <th className='fw-light'>{user.name}</th>
                    <th className='fw-light'>{user.username}</th>
                    <th className='fw-light'>{user.email}</th>
                    <th className='fw-light'>{user.address.street} - {user.address.city}</th>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}
