import "./sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div>
      <title>Student Dashboard - Clubs & Activities</title>
      <div className="sidebar-open">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-title">Student Portal</div>
          </div>
          <div className="sidebar-menu">
            <div className="menu-item active">
              <div className="menu-icon">📊</div>
              <div className="menu-text">Dashboard</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">🏆</div>
              <div className="menu-text">My Clubs</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">📅</div>
              <div className="menu-text">Events</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">📁</div>
              <div className="menu-text">Projects</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">📢</div>
              <div className="menu-text">Announcements</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">⚙️</div>
              <div className="menu-text">Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}