import React, {useEffect, useState} from "react";

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