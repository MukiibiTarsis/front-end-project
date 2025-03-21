"use client"
import React,{useContext} from "react";
import "./student.css";
import Head from 'next/head';
import { EventsContext } from '../EventsContext';

export default function Student() {
    const { events } = useContext(EventsContext);

    return (
        <React.Fragment>
            <Head>
                <title>Student Dashboard - Clubs & Activities</title>
            </Head>
            <div className="sidebar-open">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <div className="sidebar-title">Welcome Back, Andreww </div>
                    </div>
                    <div className="menu-item">
                        <a href="#chapter-projects" className="menu-text">My Chapters Projects</a>

                    </div>
                    <div className="menu-item">
                        <a href="#upcoming-events" className="menu-text">Upcoming Events</a>

                    </div>

                     <div className="menu-item">
                        <a href="#settings" className="menu-text" >Settings</a>
                    </div> 
                </div>
            </div> 
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="student-info">
                    <div className="student-name">Kahuma Andrew</div>
                    <div className="student-id">ID: STU2024135</div>

                </div>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-card">
                    <div className="card-header">
                        <div className="card-title">My Chapter Projects</div>
                    </div>
                    <div className="project-list">
                        <div className="project-item">
                            <div className="project-title">Data Science Project</div>
                            <div className="project-club">Data Science Chapter</div>
                            <div className="project-description">Creating models and Visualization.</div>
                            <div className="project-status status-ongoing">Ongoing</div>
                        </div>
                        <div className="project-item">
                            <div className="project-title">Robotics Competition Entry</div>
                            <div className="project-club">Robotics Club</div>
                            <div className="project-description">Building an autonomous robot for the regional robotics competition.</div>
                            <div className="project-status status-ongoing">Ongoing</div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="dashboard-card">
                    <div className="card-header">
                        <div className="card-title">Upcoming Activities</div>
                    </div>
                    
                 <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name} - {event.chapter} - {event.date}
          </li>
        ))}
       </ul>
               
          </div>
        </div>
    
    
    </React.Fragment>
  );
}