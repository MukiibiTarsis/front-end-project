"use client";

import React from "react";
import "./welcome.css";

export default function Welcome() {
    // Function to handle the "Enroll" button click
    const handleEnrollClick = (chapter) => {
        // Redirect to the enrollment page with the chapter name as a query parameter
        window.location.href = `/enrollment?chapter=${encodeURIComponent(chapter)}`;
    };

    return (
        <div className="container">
            <div className="background-container">
                <div className="header">
                    <img
                        src="https://shorturl.at/SQSR0"
                        alt="Computing Sciences and Engineering (CSE) Logo"
                        className="cse-logo"
                    />
                    <h1 className="welcome">Welcome to the Computing Sciences and Engineering (CSE) Site</h1>
                    <button
                        className="login-button"
                        onClick={() => (window.location.href = "/login")}
                    >
                        Login
                    </button>
                </div>
                <div className="introduction">
                    <h2>About Us</h2>
                    <p>
                        The Department of Computing is dedicated to providing students with
                        opportunities to explore their passions and gain expertise in various
                        computing domains. A key driver of this mission is the Computing Sciences
                        and Engineering (CSE) student association, which comprises dynamic chapters
                        such as Robotics and AI, Data Science, Mechatronics Engineering, Augmented
                        Reality, and related fields. These chapters empower students to develop
                        their skills, stay updated with industry trends, and collaborate on
                        innovative projects.
                    </p>
                </div>
            </div>

            <div className="activity-grid">
                {/* Robotics and AI Chapter */}
                <div className="activity-card">
                    <img
                        src="https://images.pexels.com/photos/8294623/pexels-photo-8294623.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Robotics and AI"
                    />
                    <h3>Robotics and AI Chapter</h3>
                    <p>Date: March 10, 2025</p>
                    <p>Location: Robotics Lab</p>
                    <p className="status ongoing">Status: Ongoing</p>
                    <p>
                        Join us for an exciting workshop where you'll learn about the latest
                        advancements in robotics and artificial intelligence. This chapter is
                        perfect for students interested in building and programming robots, as well
                        as exploring AI technologies.
                    </p>
                    <button onClick={() => handleEnrollClick("Robotics and AI")}>Enroll</button>
                </div>

                {/* Data Science Chapter */}
                <div className="activity-card">
                    <img
                        src="https://images.pexels.com/photos/5952738/pexels-photo-5952738.jpeg"
                        alt="Data Science"
                    />
                    <h3>Data Science Chapter</h3>
                    <p>Date: March 2, 2025</p>
                    <p>Location: Data Science Lab</p>
                    <p className="status completed">Status: Ongoing</p>
                    <p>
                        Participate in our Data Science Hackathon to solve real-world problems
                        using data analysis and machine learning techniques. This chapter is a
                        great opportunity to showcase your skills and collaborate with fellow data
                        enthusiasts.
                    </p>
                    <button onClick={() => handleEnrollClick("Data Science")}>Enroll</button>
                </div>

                {/* Cybersecurity Chapter */}
                <div className="activity-card">
                    <img
                        src="https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Cybersecurity Awareness"
                    />
                    <h3>Cybersecurity Chapter</h3>
                    <p>Upcoming</p>
                    <p>Location: Media Lab</p>
                    <p className="status upcoming">Status: Upcoming</p>
                    <p>
                        Enhance your knowledge of cybersecurity best practices and learn how to
                        protect sensitive information. This chapter will cover various aspects of
                        cybersecurity, including threat detection and prevention.
                    </p>
                    <button onClick={() => handleEnrollClick("Cybersecurity")}>Enroll</button>
                </div>
            </div>
        </div>
    );
}