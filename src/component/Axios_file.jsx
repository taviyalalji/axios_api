import React from "react";
import axios from 'axios';

function Axios(){
    console.log("before axios")
 
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log(res.data);
    })
    console.log("after axios")

    return(
        <></>
    )
}

export default Axios