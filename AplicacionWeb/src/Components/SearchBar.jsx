import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value);
    };
  
    return (
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
    );
}
