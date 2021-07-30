import { useState,useEffect } from 'react'
import axios from 'axios';

function Api(url) {

    const [data ,setData] =useState([]);
    useEffect(() => {
        setTimeout(() =>{
        axios.get(url)
        .then(response =>{
          setData(response.data);
          //console.log(response.data[0]);
          //console.log(response.data);
        }).catch(err=>{
          console.log(err);
        })
        },1000);
        
      },[url]);
    return {data};
}

export default Api
