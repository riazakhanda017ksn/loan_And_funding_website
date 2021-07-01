import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserServiceSend = () => {
    const {_id}=useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5055/loan")
        .then((res) => res.json())
        .then((data) => setData(data));
    },[])

    const findResult = data.find(data => data._id ===_id)

    const name=findResult?._id
    console.log(name);
    return (
        <div>

            <h2>hello{name}</h2>
            
        </div>
    );
};

export default UserServiceSend;