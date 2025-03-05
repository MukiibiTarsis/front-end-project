import React  from "react";
import './admin.css'
export default function admin(){
    return(
        <div class="container">
        <div class="header">
            <h1>University Clubs Dashboard</h1>
            <p>Track club presidents and upcoming activities</p>
        </div>
        
        <div class="dashboard">
            {/* <!-- Club Presidents Section --> */}
            <div class="section">
                <h2 class="section-title">Club Presidents</h2>
                <div class="cards">
                    <div class="card president-card">
                        {/* <img src="/placeholder.svg?height=100&width=100" alt="Sarah Johnson" class="president-image"> */}
                        <h3 class="president-name">Sarah Johnson</h3>
                        <p class="president-club">Debate Club</p>
                        <p class="president-contact">sarah.j@example.com</p>
                    </div>
                    
                    <div class="card president-card">
                        {/* <img src="/placeholder.svg?height=100&width=100" alt="Michael Chen" class="president-image"> */}
                        <h3 class="president-name">Michael Chen</h3>
                        <p class="president-club">Chess Club</p>
                        <p class="president-contact">m.chen@example.com</p>
                    </div>
                    
                    <div class="card president-card">
                        {/* <img src="/placeholder.svg?height=100&width=100" alt="Aisha Patel" class="president-image"> */}
                        <h3 class="president-name">Aisha Patel</h3>
                        <p class="president-club">Photography Society</p>
                        <p class="president-contact">a.patel@example.com</p>
                    </div>
                    
                    <div class="card president-card">
                        {/* <img src="/placeholder.svg?height=100&width=100" alt="James Wilson" class="president-image"> */}
                        <h3 class="president-name">James Wilson</h3>
                        <p class="president-club">Robotics Club</p>
                        <p class="president-contact">j.wilson@example.com</p>
                    </div>
                </div>
            </div>
            
            {/* <!-- Club Activities Section --> */}
            <div class="section">
                <h2 class="section-title">Upcoming Activities</h2>
                <div class="cards">
                    <div class="card activity-card">
                        <h3 class="activity-title">Annual Debate Competition</h3>
                        <p class="activity-club">Debate Club</p>
                        <span class="activity-date">Mar 15, 2025</span>
                        <p class="activity-description">Join us for our annual debate competition. Open to all students with prizes for the winners.</p>
                    </div>
                    
                    <div class="card activity-card">
                        <h3 class="activity-title">Chess Tournament</h3>
                        <p class="activity-club">Chess Club</p>
                        <span class="activity-date">Mar 20, 2025</span>
                        <p class="activity-description">Monthly chess tournament for all skill levels. Refreshments will be provided.</p>
                    </div>
                    
                    <div class="card activity-card">
                        <h3 class="activity-title">Spring Photo Exhibition</h3>
                        <p class="activity-club">Photography Society</p>
                        <span class="activity-date">Apr 5, 2025</span>
                        <p class="activity-description">Exhibition of spring-themed photographs taken by club members. Open to public.</p>
                    </div>
                    
                    <div class="card activity-card">
                        <h3 class="activity-title">Robot Building Workshop</h3>
                        <p class="activity-club">Robotics Club</p>
                        <span class="activity-date">Apr 12, 2025</span>
                        <p class="activity-description">Learn how to build a simple robot. Materials will be provided. Beginners welcome!</p>
                    </div>
                    
                    <div class="card activity-card">
                        <h3 class="activity-title">Coding Hackathon</h3>
                        <p class="activity-club">Computer Science Society</p>
                        <span class="activity-date">Apr 18-19, 2025</span>
                        <p class="activity-description">24-hour hackathon focused on creating solutions for environmental challenges.</p>
                    </div>
                    
                    <div class="card activity-card">
                        <h3 class="activity-title">Book Club Meeting</h3>
                        <p class="activity-club">Literary Society</p>
                        <span class="activity-date">Mar 25, 2025</span>
                        <p class="activity-description">Discussion of "The Great Gatsby" by F. Scott Fitzgerald. New members welcome.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}