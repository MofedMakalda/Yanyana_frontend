import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h3 style={{ marginBottom: "20px", textAlign: "center" }}>Admin Panel</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink
            to="/admin/dashboard"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/city-upload"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            City Upload
          </NavLink>
          <NavLink
            to="/admin/cruise-upload"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            Cruise Upload
          </NavLink>
          <NavLink
            to="/admin/cities"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            City Management
          </NavLink>
          <NavLink
            to="/admin/cruises"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            Cruise Management
          </NavLink>
          <NavLink
            to="/admin/plan"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            Plan Management
          </NavLink>
          <NavLink
            to="/admin/bungalows"
            style={({ isActive }) =>
              isActive ? activeLinkStyle : linkStyle
            }
          >
            Bungalows
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        <Outlet />
      </main>
    </div>
  );
};

// Styles for sidebar links
const linkStyle = {
  textDecoration: "none",
  color: "#ecf0f1",
  padding: "10px",
  borderRadius: "5px",
  transition: "background-color 0.3s",
};

const activeLinkStyle = {
  ...linkStyle,
  backgroundColor: "#34495e",
};

export default AdminLayout;
