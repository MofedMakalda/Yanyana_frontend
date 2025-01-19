import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,

  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";

const AdminNavbar: React.FC = () => {
  const {  logout } = useAuth(); // Use AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
    navigate("/admin/login"); // Redirect to home after logout
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2C3E50" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex" }}>
          <Button
            component={Link}
            to="admin/dashboard"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            Dashboard
          </Button>
          <Button
            component={Link}
            to="admin/cruise-upload"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            Manage Cruises
          </Button>
          <Button
            component={Link}
            to="admin/cruise-upload"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            Manage Cities
          </Button>
          <Button
            component={Link}
            to="admin/cruise-upload"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            Manage Bungalows
          </Button>
          <Button
            component={Link}
            to="admin/plan"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            Manage Plans
          </Button>
          <Button
            onClick={handleLogout}
            color="inherit"
            sx={{ marginRight: 2, color: "red" }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
