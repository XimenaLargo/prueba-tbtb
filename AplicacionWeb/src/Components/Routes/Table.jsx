import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import FilteredResults from '../FilteredResults';

export default function Table() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <h1 className="text-center fs-1 mt-5 pb-3">Filtro de usuarios</h1>
      <div className="d-flex justify-content-center mb-3">
        <SearchBar onSearch={handleSearch} />
      </div>
      <FilteredResults data={data} searchTerm={searchTerm} />
    </>
  );
}
