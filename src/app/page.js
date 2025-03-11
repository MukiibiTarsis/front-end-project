import React, {useEffect, useState} from "react";
import Axios from 'axios';
import axios from "axios";
import { response } from "express";

axios.defaults.baseURL = 'http://localhost:3001'

axios.get('/getStudent')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('There is an error making the GET request!', error)
    })

const Page = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001')
            .then(response => response.text())
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <h1>Front end and Backend communication</h1>
            <p>{data}</p>
        </div>
        );
};

export default Page;