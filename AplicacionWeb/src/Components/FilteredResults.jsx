import React, { useEffect, useState } from 'react';

export default function FilteredResults({data , searchTerm}) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      filterBySearch();
    }, [data, searchTerm]);
  
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
    );
}
