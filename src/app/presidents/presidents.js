"use client";
import React, { useState, useContext } from "react";
import "./presidents.css";
import { EventsContext } from '../EventsContext';

import dynamic from 'next/dynamic'; // Import Next.js dynamic

// Dynamically import Chart with SSR disabled
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Presidents() {
  const { events, setEvents } = useContext(EventsContext);

  const [activeTab, setActiveTab] = useState("overview");
  const [newEvent, setNewEvent] = useState({
    name: "",
    chapter: "",
    date: "",
    expectedParticipants: "",
    actualParticipants: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Bar Chart Options and Series
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Total Chapters', 'Active Events', 'Total Students'],
    },
    colors: ['#007bff', '#28a745', '#ffc107'],
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  const barChartSeries = [
    {
      name: 'Stats',
      data: [5, events.length, events.reduce((sum, event) => sum + Number(event.expectedParticipants || 0), 0)],
    },
  ];

  // Donut Chart Options and Series
  const donutChartOptions = {
    chart: {
      type: 'donut',
      height: 250,
    },
    labels: ['Participation', 'Remaining'],
    colors: ['#17a2b8', '#e9ecef'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
    },
  };

  const avgParticipation = events.length
    ? (events.reduce((sum, event) => sum + Number(event.actualParticipants || 0), 0) /
       events.reduce((sum, event) => sum + Number(event.expectedParticipants || 0), 0)) * 100
    : 0;

  const donutChartSeries = [avgParticipation, 100 - avgParticipation];

  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setNewEvent(eventToEdit);
    setIsEditing(true);
    setCurrentEventIndex(index);
    setIsFormVisible(true);
    console.log("Edit clicked, index:", index, "isFormVisible:", true);
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    console.log("Delete clicked, index:", index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedEvents = events.map((event, index) =>
        index === currentEventIndex ? newEvent : event
      );
      setEvents(updatedEvents);
      setIsEditing(false);
      setCurrentEventIndex(null);
    } else {
      setEvents([...events, newEvent]);
    }
    setNewEvent({ name: "", chapter: "", date: "", expectedParticipants: "", actualParticipants: "" });
    setIsFormVisible(false);
    console.log("Event added, events:", events);
  };

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
              <li
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
                data-tab="overview"
              >
                <span className="icon">📊</span> Overview
              </li>
              <li
                className={activeTab === "events" ? "active" : ""}
                onClick={() => setActiveTab("events")}
                data-tab="events"
              >
                <span className="icon">📅</span> Events
              </li>
            </ul>
          </nav>
          <div className="sidebar-footer">
            <p>Logged in as: <span>President</span></p>
          </div>
        </aside>
        <main className="main-content">
          <header className="top-header">
            <h1>President Dashboard</h1>
            <div className="user-info">
              <div className="profile">
                <span>President</span>
              </div>
            </div>
          </header>

          {activeTab === "overview" && (
            <section id="overview" className="tab-content">
              <h2>Overview</h2>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Key Statistics</h3>
                  <div className="chart-container">
                    <Chart
                      options={barChartOptions}
                      series={barChartSeries}
                      type="bar"
                      height={250}
                    />
                  </div>
                </div>
                <div className="stat-card">
                  <h3>Average Participation</h3>
                  <div className="chart-container">
                    <Chart
                      options={donutChartOptions}
                      series={donutChartSeries}
                      type="donut"
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeTab === "events" && (
            <div>
              <section id="events" className="tab-content">
                <div className="section-header">
                  <h2>Manage Events</h2>
                  <button
                    id="add-event-btn"
                    className="primary-btn"
                    onClick={() => {
                      console.log("Add New Event clicked, isFormVisible before:", isFormVisible);
                      setNewEvent({ name: "", chapter: "", date: "", expectedParticipants: "", actualParticipants: "" });
                      setIsEditing(false);
                      setIsFormVisible(true);
                      console.log("Add New Event clicked, isFormVisible after:", true);
                    }}
                  >
                    Add New Event
                  </button>
                </div>
              </section>
              <section>
                <div className="events-list">
                  <div className="filter-container">
                    <select id="chapter-filter">
                      <option value="all">All Chapters</option>
                      <option value="chapter1">Data science</option>
                      <option value="chapter2">Cybersecurity</option>
                      <option value="chapter3">Robotics</option>
                    </select>
                    <input type="text" id="event-search" placeholder="Search events..." />
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
                      {events.map((event, index) => (
                        <tr key={index}>
                          <td>{event.name}</td>
                          <td>{event.chapter}</td>
                          <td>{event.date}</td>
                          <td>{event.expectedParticipants}</td>
                          <td>{event.actualParticipants}</td>
                          <td>
                            <button
                              className="action-btn edit-btn"
                              title="Edit"
                              onClick={() => handleEdit(index)}
                            >
                              ✏️
                            </button>
                            <button
                              className="action-btn delete-btn"
                              title="Delete"
                              onClick={() => handleDelete(index)}
                            >
                              🗑️
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {isFormVisible && (
            <div id="event-form-container" className="form-container">
              <form id="event-form" onSubmit={handleAddEvent}>
                <h3>{isEditing ? "Edit Event" : "Add New Event"}</h3>
                <div className="form-group">
                  <label htmlFor="event-name">Event Name</label>
                  <input
                    type="text"
                    id="event-name"
                    name="name"
                    value={newEvent.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="event-chapter">Chapter</label>
                  <select
                    id="event-chapter"
                    name="chapter"
                    value={newEvent.chapter}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Chapter</option>
                    <option value="Chapter 1">Robotics</option>
                    <option value="Chapter 2">Cybersecurity</option>
                    <option value="Chapter 3">Datascience</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="event-date">Date</label>
                  <input
                    type="date"
                    id="event-date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expected-participants">Expected Participants</label>
                  <input
                    type="number"
                    id="expected-participants"
                    name="expectedParticipants"
                    value={newEvent.expectedParticipants}
                    onChange={handleInputChange}
                    min="1"
                    required
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    id="cancel-event"
                    className="secondary-btn"
                    onClick={() => {
                      console.log("Cancel clicked, setting isFormVisible to false");
                      setIsFormVisible(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="primary-btn">
                    {isEditing ? "Update Event" : "Save Event"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </React.Fragment>
  );
}