"use client";

import React, { useState } from "react";
import "./welcome.css";

export default function Welcome() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Logging in with", username, password);
    };

    return (
        <div>
            <div className="dashboard-container">
                <div className="header">
                    <h1 className="welcome">Welcome to the CSE Site</h1>
                    <p>We are pleased to have you visit our site</p>
                </div>

                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="introduction">
                    <h2>About Us</h2>
                    <p>
                        The Department of Computing is dedicated to providing students with opportunities to explore their passions and gain expertise in various computing domains. A key driver of this mission is the Computing Sciences and Engineering (CSE) student association, which comprises dynamic chapters such as Robotics and AI, Data Science, Mechatronics Engineering, Augmented Reality, and related fields. These chapters empower students to develop their skills, stay updated with industry trends, and collaborate on innovative projects.
                    </p>
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
        </div>
    );
}
