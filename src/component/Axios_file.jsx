import React from "react";
import axios from 'axios';

function Axios(){

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res.data);
    })
   return(
        <></>
    )
}

export default Axios