import React, {  useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import SearchBar from '../components/shared/SearchBar';
import PageHeader from '../components/shared/PageHeader';
//import Add from '../components/modals/Add';

 
const Try = ({
    setFilters = () => null,
  }) => {
    const [posts, setPosts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(16);
    const [pageCount, setPageCount] = useState(0);
    const [selected, setSelected] = useState({});
    const [showDetails, setShowDetails] = useState(false)
    const [showAdd, setShowAdd] = useState(false);
    const [userId, setUserId] = useState("");  

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          
          setPosts(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      },[])

    useEffect(() => {
        getData()
      }, [offset])

      useEffect(() => {
        fetchData();
        if (!showDetails) setSelected({});
      }, [showDetails, showAdd]); 

      const fetchData = async () => {
        try {
          const res = await axios.get(`userId`);
          setUserId(res.data.userId);
        } catch (error) {
          console.error("ERROR", error.message);
        }
      };
    // Function fetching data into Front (Cards)
   const getData = async() => {
       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
       const data = res.data;
                 const slice = data.slice(offset, offset + perPage)
                 const post = slice.map(post => <Card key = {post.id} className="flex-item">
                     <h3> Titre</h3>
                     {post.title}</Card>)
                 setData(post)
                 setPageCount(Math.ceil(data.length / perPage))
   }
   
   const handlePageClick = (e) => {
     const selectedPage = e.selected;
     setOffset(selectedPage + 1)
   };
 
    return (
<div className='container'>

{/* Botton for adding new post */}
  <PageHeader  
   buttonTitle="New Post"
    onClick={() => setShowAdd(!showAdd)}
   />
{/* Search Bar */}
   <SearchBar setFilters={setFilters} /> 

<CardDeck className="flex-container" >
  {data}        
</CardDeck>

{/* Pagination  */}
<ReactPaginate
     previousLabel={<Button variant="primary" className="mr-1 sm">Prev</Button>}
     nextLabel={<Button variant="primary" className="mr-1">Next</Button>}
     breakLabel={"..."}
     breakClassName={"break-me"}
     pageCount={pageCount}
     onPageChange={handlePageClick}
     containerClassName={"pagination"}
     subContainerClassName={"pages pagination"}
     activeClassName={"active"}/>

{/* Show modal for adding new post */}

{/* <Add show={showAdd} onClose={() => setShowAdd(!showAdd)} /> */}  
</div>  


)
   
}

export default Try
