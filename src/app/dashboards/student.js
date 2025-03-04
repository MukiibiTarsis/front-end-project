import React from "react";
import"./student.css";
import Head from 'next/head';


export default function Student(){
    return(
       <>
      <Head>
        


    
      <title>Student Dashboard - Clubs & Activities</title>
   
      </Head>
      <div>
      <title>Student Dashboard - Clubs & Activities</title>
      <div className="sidebar-open">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-title">Welcome Back Andrew</div>
          </div>
          
            <div className="menu-item">
              <div className="menu-text">My Chapters</div>
            </div>
            <div className="menu-item">
              
              <div className="menu-text">Events</div>
            </div>
            <div className="menu-item">
              <div className="menu-text">Projects</div>
            </div>
            <div className="menu-item">
              <div className="menu-text">Announcements</div>
            </div>
            <div className="menu-item">
              <div className="menu-text">Settings</div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="dashboard-container">
        {/* <!-- Dashboard Header --> */}
        <div className="dashboard-header">
            <div className="student-info">
                <div className="student-name">Kahuma Andrew</div>
                <div className="student-id">ID: STU2024135</div>
        </div>
    {/*         
        <!-- Dashboard Content --> */}
        <div className="dashboard-content">
            {/* <!-- Club Projects Card --> */}
            <div className="dashboard-card">
                <div className="card-header">
                    <div className="card-title">My Chapter Projects</div>
                </div>
                <div className="project-list">
                    {/* <!-- Project 1 --> */}
                    <div className="project-item">
                        <div className="project-title">Data Science Project</div>
                        <div className="project-club">Data Science Chapter</div>
                        <div className="project-description">Creating models and Visualization.</div>
                        <div className="project-status status-ongoing">Ongoing</div>
                    </div>
                    
                    {/* <!-- Project 2 --> */}
                    <div className="project-item">
                        <div className="project-title">Robotics Competition Entry</div>
                        <div className="project-club">Robotics Club</div>
                        <div className="project-description">Building an autonomous robot for the regional robotics competition.</div>
                        <div className="project-status status-ongoing">Ongoing</div>
                    </div>
                    
                    
                    
            
                </div>
            </div>
    {/*             
            <!-- Upcoming Activities Card --> */}
            <div className="dashboard-card">
                <div className="card-header">
                    <div className="card-title">Upcoming Activities</div>
                </div>
                <div className="activity-list">
                    {/* <!-- Activity 1 --> */}
                    <div className="activity-item">
                        <div className="activity-date">March 15, 2024</div>
                        <div className="activity-title">Robotics Club Meeting</div>
                        <div className="activity-time">3:30 PM - 5:00 PM</div>
                        <div className="activity-location">Engineering Building, Room 302</div>
                    </div>
                    
                    {/* <!-- Activity 2 --> */}
                    <div className="activity-item">
                        <div className="activity-date">March 17, 2024</div>
                        <div className="activity-title">Data Science Meeting</div>
                        <div className="activity-time">10:00 AM - 2:00 PM</div>
                        <div className="activity-location">N12 N-block</div>
                    </div>
                    
                    {/* <!-- Activity 3 --> */}
                    <div className="activity-item">
                        <div className="activity-date">March 20, 2024</div>
                        <div className="activity-title">Trip to the MTN Ware-houses</div>
                        <div className="activity-time">6:00 PM - 8:00 PM</div>
                        <div className="activity-location">Student Center Auditorium</div>
                    </div>
                    
                    {/* <!-- Activity 4 --> */}
                    <div className="activity-item">
                        <div className="activity-date">March 25, 2024</div>
                        <div className="activity-title">Web Development Workshop</div>
                        <div className="activity-time">4:00 PM - 6:00 PM</div>
                        <div className="activity-location">Computer Science Building, Lab 104</div>
                    </div>
    {/*                     
                    <!-- Activity 5 --> */}
                    <div className="activity-item">
                        <div className="activity-date">April 2, 2024</div>
                        <div className="activity-title">Robotics Competition</div>
                        <div className="activity-time">9:00 AM - 5:00 PM</div>
                        <div className="activity-location">City Convention Center</div>
                    </div>
                 </div>
             </div>
         </div>
      </div>


        
            

        </div>
        </>
    )
}
