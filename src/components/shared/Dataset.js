import React from 'react';
import axios from "axios";
import  {  useEffect, useState } from "react";

const Dataset = () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  async function getDataset() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return data.results; 
  }

  useEffect( () => {getDataset()},[]);


    return (
        <div>
     
     { dataset.map((data,index) => {
        if (data) {
          return (
            <div key={data.id}>
              <h1>{data.body}</h1>
	    </div>	
    	   )	
    	 }
    }) }

        


        </div>
    )
}

export default Dataset
