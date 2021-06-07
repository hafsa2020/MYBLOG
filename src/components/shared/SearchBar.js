import React, {  useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



const SearchBar = ({ setFilters }) => {
  const [title, setTitle] = useState("");
  
 // const [data, setData] = useState([]); 
  const [page, setPage] = useState(1);
  //const [pagination, setPagination] = useState({});
 

  const updateFilters = (e) => {
    e.preventDefault();
    let filter = `title=${title}`;
    setFilters(filter);
  };
  return (
    <div setFilters={setFilters}>
       <br/> 
    <InputGroup className="mb-3 ">
    <FormControl
      placeholder="Type in order to searche"
      aria-label="Search"
      aria-describedby="basic-addon2"
      onChange={(e) => setTitle(e.target.value)}
          onKeyUp={updateFilters}
          value={title}
          className="mb-3 text-black"
    />
  
  </InputGroup>
  
     </div>
  );
} 

export default SearchBar