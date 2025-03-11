"use client";

import React, { useState } from "react";
import "./signup.css";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        const credentials = { username, password, role };
        console.log(credentials);
        // console.log("Signing Up in with", username, password, role);
        // Redirect based on role
        // if (role === "student") {
        //     window.location.href = "/student-dashboard";
        // } else if (role === "president") {
        //     window.location.href = "/president-dashboard";
        // } else if (role === "admin") {
        //     window.location.href = "/admin-dashboard";
        // }
    };

    return (
        <div className="container">
            <div className="background-container">
                <div className="header">
                    <h1 className="welcome">Welcome to the CSE Site</h1>
                    <p>We are pleased to have you visit our site</p>
                </div>

                <div className="signup-form">
                    <h2>Sign Up</h2>
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
                        <div className="form-group">
                            <label htmlFor="role">Role:</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="student">Student</option>
                                <option value="president">President</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>

            <div className="introduction">
                <h2>ABOUT CSE</h2>
                <p>
                    The Department of Computing is dedicated to providing students with opportunities to explore their passions and gain expertise in various computing domains. A key driver of this mission is the Computing Sciences and Engineering (CSE) student association, which comprises dynamic chapters such as Robotics and AI, Data Science, Mechatronics Engineering, Augmented Reality, and related fields. These chapters empower students to develop their skills, stay updated with industry trends, and collaborate on innovative projects.
                </p>
            </div>

            <div className="activity-grid">
                <div className="activity-card">
                    <img src="https://images.pexels.com/photos/8294623/pexels-photo-8294623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Robotics and AI" />
                    <h3>Robotics and AI Chapter</h3>
                    <p>Date: March 10, 2025</p>
                    <p>Location: Robotics Lab</p>
                    <p className="status ongoing">Status: Ongoing</p>
                    <p>Join us for an exciting workshop where you'll learn about the latest advancements in robotics and artificial intelligence. This chapter is perfect for students interested in building and programming robots, as well as exploring AI technologies.</p>
                </div>

                <div className="activity-card">
                    <img src="https://images.pexels.com/photos/5952738/pexels-photo-5952738.jpeg" alt="Data Science" />
                    <h3>Data Science Chapter</h3>
                    <p>Date: March 2, 2025</p>
                    <p>Location: Data Science Lab</p>
                    <p className="status completed">Status: Ongoing</p>
                    <p>Participate in our Data Science Hackathon to solve real-world problems using data analysis and machine learning techniques. This chapter is a great opportunity to showcase your skills and collaborate with fellow data enthusiasts.</p>
                </div>

                <div className="activity-card">
                    <img src="https://images.pexels.com/photos/8438865/pexels-photo-8438865.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mechatronics Engineering" />
                    <h3>Mechatronics Engineering Chapter</h3>
                    <p>Date: March 4-6, 2025</p>
                    <p>Location: Robotics Lab</p>
                    <p className="status ongoing">Status: Ongoing</p>
                    <p>Explore innovative projects created by our Mechatronics Engineering students. This showcase highlights the integration of mechanical, electronic, and software engineering in creating cutting-edge solutions.</p>
                </div>

                <div className="activity-card">
                    <img src="https://images.pexels.com/photos/7864614/pexels-photo-7864614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Augmented Reality" />
                    <h3>Augmented Reality Chapter</h3>
                    <p>Date: March 15, 2025</p>
                    <p>Location: Ankra Foundation Auditorium</p>
                    <p className="status ongoing">Status: Upcoming</p>
                    <p>Join us for a session on Augmented Reality (AR) and discover how AR is transforming various industries. Learn about the latest AR technologies and applications from industry experts.</p>
                </div>

                <div className="activity-card">
                    <img src="https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cybersecurity Awareness" />
                    <h3>Cybersecurity Chapter</h3>
                    <p>Upcoming</p>
                    <p>Location: Media Lab</p>
                    <p className="status upcoming">Status: Upcoming</p>
                    <p>Enhance your knowledge of cybersecurity best practices and learn how to protect sensitive information. This chapter will cover various aspects of cybersecurity, including threat detection and prevention.</p>
                </div>

                <div className="activity-card">
                    <img src="https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg" alt="Blockchain Technology" />
                    <h3>Blockchain Technology Chapter</h3>
                    <p>Upcoming</p>
                    <p>Location: Media Lab</p>
                    <p className="status completed">Status: Upcoming</p>
                    <p>Discover the potential of blockchain technology and its applications beyond cryptocurrencies. This chapter will provide insights into how blockchain is revolutionizing various sectors, including finance, supply chain, and healthcare.</p>
                </div>
            </div>
        </div>
    );
}