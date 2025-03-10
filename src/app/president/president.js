// import { useEffect, useState } from "react";
// import{useNavigate} from "react-router-dom";
import React from "react";
import "./president.css";
export default function President(){
    // const[dashboardDATA,setDashboardDATA]=useState([null]);
    //     const navigate=useNavigate();
    //     useEffect(()=>{
    //         fetch(`${process.env.REACT_PRESIDENT_API_URL}/president/dashboard`, {
    //             headers: { Authorization: 'Basic ' + btoa('user1:password1') }
    //         })
    //         .then((response) => {
    //             if(!response.ok){
    //                 throw new Error("NOT AUTHORIZED");
    //             }
    //             return response.json();
    //         })
    //             .then((data)=> setDashboardDATA(data))
    //             .catch(()=>navigate("/login"));
    //         }, [navigate]);
    //         if(!dashboardDATA){
    //             return <div>Loading...</div>;
    //         }
    //         const {stats, events,users}=dashboardDATA;
        
            return( 
     <div className="dashboard-container">
        <div className="header">
            <h1 className="welcome">Welcome, President👋</h1>
            <p>Chapter Activities Dashboard</p>
        </div>

        <div className="activity-grid">
            <div className="activity-card">
                <h3>Fundraising Event</h3>
                <p>Date: March 10, 2025</p>
                <p>Location: Main Hall</p>
                <p className="status upcoming">Status: Upcoming</p>
            </div>

            <div className="activity-card">
                <h3>Study Group Session</h3>
                <p>Date: March 2, 2025</p>
                <p>Location: Media lab 3</p>
                <p className="status completed">Status: Completed</p>
            </div>

            <div className="activity-card">
                <h3>Community Service</h3>
                <p>Date: March 4-6, 2025</p>
                <p>Location: Local Park</p>
                <p className="status ongoing">Status: Ongoing</p>
            </div>

            <div className="activity-card">
                <h3>Guest Speaker Series</h3>
                <p>Date: March 15, 2025</p>
                <p>Location: Auditorium</p>
                <p className="status upcoming">Status: Upcoming</p>
            </div>
        </div>
    </div>

    )
};