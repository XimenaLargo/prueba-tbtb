import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";

export default function FilterTitle() {
  return (
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
  )
}
