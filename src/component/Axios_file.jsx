import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

function Axios(){
 // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response)
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data:</h2>
           {data.map((post) => (
        <p>{post.id} : {post.title}<br /></p> 
        ))}
     </div>
  );
};
export default Axios

