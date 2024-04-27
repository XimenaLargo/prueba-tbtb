import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Table() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    filterBySearch();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterBySearch = () => {
    const filtered = data.filter(user => {
      const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const emailMatch = user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const cityMatch = user.address.city.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || emailMatch || cityMatch;
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <h1 className="text-center fs-1 mt-5 pb-3">Filtro de usuarios</h1>
      <div className="d-flex justify-content-center mb-3">
      <div className="input-group w-50">
          <span className="input-group-text"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre, email o ciudad..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
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
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td className='fw-light'>{user.id}</td>
              <td className='fw-light'>{user.name}</td>
              <td className='fw-light'>{user.username}</td>
              <td className='fw-light'>{user.email}</td>
              <td className='fw-light'>{user.address.street} - {user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
