import React  from "react";
import './admin.css'
export default function admin(){
    return(
            
            <div className="container">
                <header>
                    <h1>Club Administration Dashboard</h1>
                    <p>Manage club activities, members, and leadership</p>
                </header>
        
                <div className="dashboard-grid">
                    {/* Club Membership Chart */}
                    <div className="card chart-card">
                        <div className="card-header">
                            <h2>Club Membership Overview</h2>
                            <p>Current member count across all clubs</p>
                        </div>
                        <div className="card-content">
                            <div className="chart">
                                <div className="chart-labels">
                                    <span>20</span>
                                    <span>15</span>
                                    <span>10</span>
                                    <span>5</span>
                                    <span>0</span>
                                </div>
                                <div className="chart-bars">
                                    <div className="chart-bar-group">
                                        <div className="chart-bar" style={{ height: '75%' }}>
                                            <span className="chart-value">15</span>
                                        </div>
                                        <span className="chart-label">Data Science</span>
                                    </div>
                                    <div className="chart-bar-group">
                                        <div className="chart-bar" style={{ height: '60%' }}>
                                            <span className="chart-value">12</span>
                                        </div>
                                        <span className="chart-label">Robotics</span>
                                    </div>
                                    <div className="chart-bar-group">
                                        <div className="chart-bar" style={{ height: '50%' }}>
                                            <span className="chart-value">10</span>
                                        </div>
                                        <span className="chart-label">Cybersecurity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    {/* Chapter Management */}
                    <div className="card">
                        <div className="card-header">
                            <h2>Chapter Management</h2>
                            <p>Create or delete club chapters</p>
                        </div>
                        <div className="card-content">
                            <div className="input-group">
                                <input type="text" placeholder="New chapter name" />
                                <button className="btn btn-primary"><span className="icon">+</span> Create</button>
                            </div>
                            <div className="section-title">
                                <h3>Existing Chapters</h3>
                            </div>
                            <div className="chapter-list">
                                <div className="chapter-item">
                                    <span>Data Science Club</span>
                                    <button className="btn btn-danger btn-small"><span className="icon">×</span></button>
                                </div>
                                <div className="chapter-item">
                                    <span>Robotics Club</span>
                                    <button className="btn btn-danger btn-small"><span className="icon">×</span></button>
                                </div>
                                <div className="chapter-item">
                                    <span>Cybersecurity Club</span>
                                    <button className="btn btn-danger btn-small"><span className="icon">×</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    {/* Student Management */}
                    <div className="card">
                        <div className="card-header">
                            <h2>Student Management</h2>
                            <p>Add or remove students from clubs</p>
                        </div>
                        <div className="card-content">
                            <div className="form-group">
                                <label htmlFor="club-select">Select Club</label>
                                <select id="club-select">
                                    <option value="" disabled selected>Select a club</option>
                                    <option value="1">Data Science Club</option>
                                    <option value="2">Robotics Club</option>
                                    <option value="3">Cybersecurity Club</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="Student name" />
                                <button className="btn btn-primary"><span className="icon">+</span> Add</button>
                            </div>
                            <button className="btn btn-outline full-width"><span className="icon">-</span> Remove Student</button>
                        </div>
                    </div>
        
                    {/* President Management */}
                    <div className="card">
                        <div className="card-header">
                            <h2>President Management</h2>
                            <p>Assign or remove club presidents</p>
                        </div>
                        <div className="card-content">
                            <div className="form-group">
                                <label htmlFor="president-club-select">Select Club</label>
                                <select id="president-club-select">
                                    <option value="" disabled selected>Select a club</option>
                                    <option value="1">Data Science Club</option>
                                    <option value="2">Robotics Club</option>
                                    <option value="3">Cybersecurity Club</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="President name" />
                                <button className="btn btn-primary"><span className="icon">👑</span> Assign</button>
                            </div>
                            <button className="btn btn-outline full-width"><span className="icon">×</span> Remove President</button>
                        </div>
                    </div>
        
                    {/* Club Details */}
                    <div className="card full-width">
                        <div className="card-header">
                            <h2>Club Details</h2>
                            <p>Current information for all clubs</p>
                        </div>
                        <div className="card-content">
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Club Name</th>
                                            <th>Members</th>
                                            <th>President</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Data Science Club</td>
                                            <td>15</td>
                                            <td>Alex Johnson</td>
                                        </tr>
                                        <tr>
                                            <td>Robotics Club</td>
                                            <td>12</td>
                                            <td>Sam Williams</td>
                                        </tr>
                                        <tr>
                                            <td>Cybersecurity Club</td>
                                            <td>10</td>
                                            <td>Jamie Smith</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



    )
}