"use client";

import React, { useState } from "react";
import "./signup.css";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleSignup = (e) => {
        e.preventDefault();
        // Add signup logic here
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signing up with", username, password, role);
        // Redirect to login page after signup
        window.location.href = "/login";
    };

    return (
        <div className="container">
            <div className="background-container">
                <div className="header">
                    <h1 className="welcome">Welcome to the CSE Site</h1>
                    
                </div>

                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
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
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                        <button type="submit">Sign Up</button>
                    </form>
                    <p className="login-link">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}