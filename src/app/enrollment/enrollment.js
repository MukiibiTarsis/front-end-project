"use client";

import React, { useState, useEffect } from "react";
import "./enrollment.css";

export default function Enrollment() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [chapter, setChapter] = useState("Robotics and AI");

    // UseEffect to get the chapter from the query parameter
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const selectedChapter = params.get("chapter");
        if (selectedChapter) {
            setChapter(selectedChapter);
        }
    }, []);

    const handleEnrollment = (e) => {
        e.preventDefault();
        console.log("Enrolling with", username, password, chapter);
        alert(`You have successfully enrolled in the ${chapter} chapter!`);
        window.location.href = "/";
    };

    return (
        <div className="background-container">
            <div className="container">
                <div className="header">
                    <h1 className="welcome">Enroll in a Chapter</h1>
                    <p>Join one of our exciting chapters and start exploring your interests!</p>
                </div>

                <div className="enrollment-form">
                    <h2>Enrollment Form</h2>
                    <form onSubmit={handleEnrollment}>
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
                            <label htmlFor="chapter">Chapter:</label>
                            <select
                                id="chapter"
                                value={chapter}
                                onChange={(e) => setChapter(e.target.value)}
                                required
                            >
                                <option value="Robotics and AI">Robotics and AI</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                            </select>
                        </div>
                        <button type="submit">Enroll</button>
                    </form>
                </div>
            </div>
        </div>
    );
}