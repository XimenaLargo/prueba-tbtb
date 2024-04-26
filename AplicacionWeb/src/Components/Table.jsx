import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";

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
    <div className='d-flex justify-content-center align-items-center flex-wrap title mt-3'>
    <h1 className="text-center fs-1 mt-5 pb-3">Filtro de usuarios</h1>
      <Dropdown className='mt-4 ms-2'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    <FontAwesomeIcon icon={faFilter}/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
        <Dropdown.Item href="#/action-3">City</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
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
