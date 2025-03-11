"use client";

import React from "react";
import "./welcome.css";

export default function Welcome() {
    return (
        <div className="container">
            <div className="background-container">
                <div className="header">
                    <img src="data:image/png;base64,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" alt="Computing Sciences and Engineering (CSE) Logo" className="cse-logo" />
                    <h1 className="welcome">Welcome to the Computing Sciences and Engineering (CSE) Site</h1>
                    <button className="login-button" onClick={() => window.location.href = '/login'}>Login</button>
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
                        <button type="submit">Login</button>
                    </form>
                    <p className="signup-link">
                        Don't have an account? <a href="/signup">Sign up here</a>
                    </p>
                </div>
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