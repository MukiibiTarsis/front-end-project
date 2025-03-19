"use client";

import React, { useState } from "react";
import "./login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Logging in with", username, password, role);
        // Redirect based on role
        if (role === "student") {
            window.location.href = "/student-dashboard";
        } else if (role === "president") {
            window.location.href = "/president-dashboard";
        } else if (role === "admin") {
            window.location.href = "/admin-dashboard";
        }
    };

    return (
        <div className="container">
            <div className="background-container">
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
                </div>
            </div>
        </div>
    );
}