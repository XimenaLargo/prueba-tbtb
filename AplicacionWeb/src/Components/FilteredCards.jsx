import React from 'react'
import { useState , useEffect } from 'react';

export default function FilteredCards({ data, searchTerm }) {
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
      <div className="d-flex justify-content-evenly flex-wrap mt-3">
        {filteredData.map((user) => (
          <div key={user.id} className="card m-3">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Username: {user.username}</p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Address: {user.address.street} - {user.address.city}</p>
            </div>
          </div>
        ))}
      </div>
    );
}
