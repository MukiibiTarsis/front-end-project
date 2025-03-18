import React from "react";
import "./presidents.css";
// import Head from 'next/head';

export default function Presidents() {
  
    
    return (
        <React.Fragment>
    <title>President Dashboard - CSE Chapters</title>

    <div className="dashboard">
    
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>President Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active" data-tab="overview"><span className="icon">📊</span> Overview</li>
          <li data-tab="events"><span className="icon">📅</span> Events</li>
          <li data-tab="progress"><span className="icon">📈</span> Progress</li>
          <li data-tab="participants"><span className="icon">👥</span> Participants</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>Logged in as: <span>President</span></p>
      </div>
    </aside>

    {/* <!-- Main Content Area --> */}
    <main className="main-content">
      <header className="top-header">
        <h1>President Dashboard</h1>
        <div className="user-info">
          <button id="theme-toggle">🌙</button>
          <div className="profile">
           
            <span>President</span>
          </div>
        </div>
      </header>

        {/* <!-- Events Tab --> */}
        <section id="events" className="tab-content"></section>
        <div className="section-header">
          <h2>Manage Events</h2>
          <button id="add-event-btn" className="primary-btn">Add New Event</button>
    

        <div id="event-form-container" className="form-container hidden">
          <form id="event-form">
            <h3>Add New Event</h3>
            <div className="form-group">
              <label htmlFor="event-name">Event Name</label>
              <input type="text" id="event-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="event-chapter">Chapter</label>
              <select id="event-chapter" required>
                <option value="">Select Chapter</option>
                <option value="chapter1">Chapter 1</option>
                <option value="chapter2">Chapter 2</option>
                <option value="chapter3">Chapter 3</option>
                <option value="chapter4">Chapter 4</option>
                <option value="chapter5">Chapter 5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="event-date">Date</label>
              <input type="date" id="event-date" required/>
            </div>
            <div className="form-group">
              <label htmlFor="event-description">Description</label>
              <textarea id="event-description" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="expected-participants">Expected Participants</label>
              <input type="number" id="expected-participants" min="1"/>
            </div>
            <div class="form-actions">
              <button type="button" id="cancel-event" className="secondary-btn">Cancel</button>
              <button type="submit" className="primary-btn">Save Event</button>
            </div>
          </form>
        </div>
      </div>

{/* 
      <!-- Overview Tab --> */}
      <section id="overview" className="tab-content active">
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Chapters</h3>
            <p className="stat-value">5</p>
          </div>
          <div className="stat-card">
            <h3>Active Events</h3>
            <p className="stat-value">12</p>
          </div>
          <div className="stat-card">
            <h3>Total Students</h3>
            <p className="stat-value">450</p>
          </div>
          <div className="stat-card">
            <h3>Avg. Participation</h3>
            <p className="stat-value">78%</p>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-card">
            <h3>Event Participation</h3>
            <canvas id="participation-chart"></canvas>
          </div>
          <div className="chart-card">
            <h3>Chapter Activity</h3>
            <canvas id="activity-chart"></canvas>
          </div>
        </div>

        <div className="recent-events">
          <h3>Recent Events</h3>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Chapter</th>
                <th>Date</th>
                <th>Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Development Workshop</td>
                <td>Chapter 1</td>
                <td>Mar 15, 2025</td>
                <td>28</td>
              </tr>
              <tr>
                <td>AI Hackathon</td>
                <td>Chapter 2</td>
                <td>Mar 20, 2025</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Cybersecurity Seminar</td>
                <td>Chapter 3</td>
                <td>Mar 25, 2025</td>
                <td>38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

     
      <section>
        <div className="events-list">
          <div className="filter-container">
            <select id="chapter-filter">
              <option value="all">All Chapters</option>
              <option value="chapter1">Chapter 1</option>
              <option value="chapter2">Chapter 2</option>
              <option value="chapter3">Chapter 3</option>
              <option value="chapter4">Chapter 4</option>
              <option value="chapter5">Chapter 5</option>
            </select>
            <input type="text" id="event-search" placeholder="Search events..."/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Chapter</th>
                <th>Date</th>
                <th>Expected Participants</th>
                <th>Actual Participants</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Development Workshop</td>
                <td>Chapter 1</td>
                <td>Mar 15, 2025</td>
                <td>30</td>
                <td>28</td>
                <td>
                  <button className="action-btn edit-btn" title="Edit">✏️</button>
                  <button className="action-btn delete-btn" title="Delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>AI Hackathon</td>
                <td>Chapter 2</td>
                <td>Mar 20, 2025</td>
                <td>50</td>
                <td>45</td>
                <td>
                  <button className="action-btn edit-btn" title="Edit">✏️</button>
                  <button className="action-btn delete-btn" title="Delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>Cybersecurity Seminar</td>
                <td>Chapter 3</td>
                <td>Mar 25, 2025</td>
                <td>40</td>
                <td>38</td>
                <td>
                  <button className="action-btn edit-btn" title="Edit">✏️</button>
                  <button className="action-btn delete-btn" title="Delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>Data Science Workshop</td>
                <td>Chapter 4</td>
                <td>Apr 5, 2025</td>
                <td>35</td>
                <td>32</td>
                <td>
                  <button className="action-btn edit-btn" title="Edit">✏️</button>
                  <button className="action-btn delete-btn" title="Delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>Mobile App Development</td>
                <td>Chapter 5</td>
                <td>Apr 10, 2025</td>
                <td>25</td>
                <td>22</td>
                <td>
                  <button className="action-btn edit-btn" title="Edit">✏️</button>
                  <button className="action-btn delete-btn" title="Delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* <!-- Progress Tab --> */}
      <section id="progress" className="tab-content">
        <h2>Student Progress</h2>
        
        <div class="filter-container">
          <select id="progress-chapter-filter">
            <option value="all">All Chapters</option>
            <option value="chapter1">Chapter 1</option>
            <option value="chapter2">Chapter 2</option>
            <option value="chapter3">Chapter 3</option>
            <option value="chapter4">Chapter 4</option>
            <option value="chapter5">Chapter 5</option>
          </select>
          <select id="progress-metric">
            <option value="attendance">Attendance</option>
            <option value="projects">Projects Completed</option>
            <option value="certifications">Certifications</option>
          </select>
        </div>
        
        <div className="chart-container full-width">
          <canvas id="progress-chart"></canvas>
        </div>
        
        <div className="progress-details">
          <h3>Progress Details</h3>
          <table>
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Attendance Rate</th>
                <th>Projects Completed</th>
                <th>Certifications</th>
                <th>Overall Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chapter 1</td>
                <td>85%</td>
                <td>12</td>
                <td>8</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress" ></div>
                  </div>
                  78%
                </td>
              </tr>
              <tr>
                <td>Chapter 2</td>
                <td>92%</td>
                <td>15</td>
                <td>10</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress" ></div>
                  </div>
                  85%
                </td>
              </tr>
              <tr>
                <td>Chapter 3</td>
                <td>78%</td>
                <td>10</td>
                <td>6</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress" ></div>
                  </div>
                  72%
                </td>
              </tr>
              <tr>
                <td>Chapter 4</td>
                <td>88%</td>
                <td>14</td>
                <td>9</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress" ></div>
                  </div>
                  80%
                </td>
              </tr>
              <tr>
                <td>Chapter 5</td>
                <td>75%</td>
                <td>8</td>
                <td>5</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress" ></div>
                  </div>
                  68%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* <!-- Participants Tab --> */}
      <section id="participants" class="tab-content">
        <h2>Participants Overview</h2>
        
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Participants</h3>
            <p className="stat-value">450</p>
          </div>
          <div className="stat-card">
            <h3>Active Participants</h3>
            <p className="stat-value">382</p>
          </div>
          <div className="stat-card">
            <h3>New This Month</h3>
            <p className="stat-value">24</p>
          </div>
          <div className="stat-card">
            <h3>Retention Rate</h3>
            <p className="stat-value">92%</p>
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-card">
            <h3>Participants by Chapter</h3>
            <canvas id="participants-by-chapter"></canvas>
          </div>
          <div className="chart-card">
            <h3>Participation Trend</h3>
            <canvas id="participation-trend"></canvas>
          </div>
        </div>
        
        <div className="participants-list">
          <div className="filter-container">
            <select id="participants-chapter-filter">
              <option value="all">All Chapters</option>
              <option value="chapter1">Chapter 1</option>
              <option value="chapter2">Chapter 2</option>
              <option value="chapter3">Chapter 3</option>
              <option value="chapter4">Chapter 4</option>
              <option value="chapter5">Chapter 5</option>
            </select>
            <input type="text" id="participant-search" placeholder="Search participants..."/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Chapter</th>
                <th>Events Attended</th>
                <th>Projects</th>
                <th>Last Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Chapter 1</td>
                <td>5</td>
                <td>2</td>
                <td>Mar 17, 2025</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Chapter 2</td>
                <td>8</td>
                <td>3</td>
                <td>Mar 18, 2025</td>
              </tr>
              <tr>
                <td>Bob Johnson</td>
                <td>Chapter 1</td>
                <td>4</td>
                <td>1</td>
                <td>Mar 15, 2025</td>
              </tr>
              <tr>
                <td>Alice Williams</td>
                <td>Chapter 3</td>
                <td>6</td>
                <td>2</td>
                <td>Mar 16, 2025</td>
              </tr>
              <tr>
                <td>Michael Brown</td>
                <td>Chapter 4</td>
                <td>7</td>
                <td>3</td>
                <td>Mar 18, 2025</td>
              </tr>
              <tr>
                <td>Sarah Davis</td>
                <td>Chapter 5</td>
                <td>3</td>
                <td>1</td>
                <td>Mar 14, 2025</td>
              </tr>
              <tr>
                <td>David Wilson</td>
                <td>Chapter 2</td>
                <td>9</td>
                <td>4</td>
                <td>Mar 18, 2025</td>
              </tr>
              <tr>
                <td>Emily Taylor</td>
                <td>Chapter 3</td>
                <td>5</td>
                <td>2</td>
                <td>Mar 17, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>


   </React.Fragment>
    )
}