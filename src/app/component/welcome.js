import React from "react";
import "./welcome.css";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to CSE Chapter Management</h1>
      <p>Your gateway to exploring, collaborating, and innovating within CSE student chapters.</p>
      <Link href="/dashboard" className="btn">Get Started</Link>
    </div>
  );
}
