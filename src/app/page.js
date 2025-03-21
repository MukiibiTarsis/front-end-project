// // import React, {useEffect, useState} from "react";
// // import Axios from 'axios';
// import axios from "axios";
// // import { response } from "express";

// axios.defaults.baseURL = 'http://localhost:3001'

// axios.get('/getStudent')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('There is an error making the GET request!', error)
//     })

// const Page = () => {
//     const [data, setData] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:5001')
//             .then(response => response.text())
//             .then(data => setData(data));
//     }, []);
//     return (
//         <div>
//             <h1>Front end and Backend communication</h1>
//             <p>{data}</p>
//         </div>
//         );
// };

// export default Page;

"use client";



  
// Configure Axios base URL
axios.defaults.baseURL = 'http://localhost:3001'; // Adjusted port to match typical backend port

const Page = () => {
    const [data, setData] = useState('');
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch basic data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/'); // Adjust endpoint if needed
                setData(response.data);
            } catch (err) {
                setError('Failed to fetch data');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fetch students data
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('/api/getStudent'); // Adjusted endpoint
                setStudents(response.data);
            } catch (err) {
                setError('Failed to fetch students');
                console.error('Error fetching students:', err);
            }
        };

        fetchStudents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Front end and Backend communication</h1>
            <p>{data}</p>
            
            <h2>Students List</h2>
            {students.length > 0 ? (
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {/* Adjust based on your student data structure */}
                            {student.name || 'Student'} - {student.email || 'No email'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No students found</p>
            )}
        </div>
    );
};

export default Page;
