import React from "react";
import "./welcome.css";
export default function welcome(){
    return (
        <div>
             <div class="dashboard-container">
        <div class="header">
            <h1 class="welcome">Welcome to the CSE Site</h1>
            <p>We are pleased to have you visit our site</p>
        </div>

        <div class="activity-grid">
            <div class="activity-card">
                <h3>Fundraising Event</h3>
                <p>Date: March 10, 2025</p>
                <p>Location: Main Hall</p>
                <p class="status upcoming">Status: Upcoming</p>
            </div>

            <div class="activity-card">
                <h3>Study Group Session</h3>
                <p>Date: March 2, 2025</p>
                <p>Location: Media lab 3</p>
                <p class="status completed">Status: Completed</p>
            </div>

            <div class="activity-card">
                <h3>Community Service</h3>
                <p>Date: March 4-6, 2025</p>
                <p>Location: Local Park</p>
                <p class="status ongoing">Status: Ongoing</p>
            </div>

            <div class="activity-card">
                <h3>Guest Speaker Series</h3>
                <p>Date: March 15, 2025</p>
                <p>Location: Auditorium</p>
                <p class="status upcoming">Status: Upcoming</p>
            </div>
        </div>
    </div>

        </div>
    );
}