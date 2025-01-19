
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import profile from "../assets/me.jpg";
import cruise from "../assets/cruise.jpg";
import bungalow from "../assets/bungalow.png";
import black from "../assets/black.png";
import plan from "../assets/plan.png";
import city from "../assets/city.png";
import LogoutIcon from "@mui/icons-material/Logout";
import SailingIcon from "@mui/icons-material/Sailing";
import BungalowIcon from "@mui/icons-material/Bungalow";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import { AdminButton } from "./components/Button";
import { useAuth } from "../context/Auth/AuthContext";

export const AdminDashboard = () => {
  const { firstname, lastname, isAuthenticated, username,logout } = useAuth(); // Use AuthContext
  const navigate = useNavigate();

  const handleManageCities = () => {
    navigate("/admin/city-upload");
  };

  const handleManageCruises = () => {
    navigate("/admin/cruise-upload");
  }
  const handleManagePlans = () => {
    navigate("/admin/plan");
  };
  const handleManageBungalows = () => {
    navigate("/admin/bungalows");
  };
  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
    navigate("/admin/login"); // Redirect to home after logout
  };

  return (
    
    
    
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "25%",
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "130px", // Image size
            height: "130px",
            borderRadius: "50%", // Circular shape
            overflow: "hidden",
            border: "2px solid #ddd", // Optional border
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <img
            src={profile} // Replace with the actual profile image path
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",

              // Ensures the image covers the area without distortion
            }}
          />
        </Box>
        {isAuthenticated?(
          <h6 style={{marginTop:"10px"}}> {firstname} {lastname} </h6>
        ):<Typography>Not Logged in</Typography>}
        {isAuthenticated?(
           <p style={{ marginTop: 0 }}>{username}</p>
        ):<Typography>No Email </Typography>}
        

        <Box sx={{ display: "flex", flexDirection: "column", width: "90%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <AdminButton
              icon={<SailingIcon />}
              label="Cruise"
              click={handleManageCruises}
            />
            <AdminButton
              icon={<BungalowIcon />}
              label="BUNGALOWS"
              click={handleManageBungalows}
            />
            <AdminButton
              icon={<LocationCityIcon />}
              label="cities"
              click={handleManageCities}
            />
            <AdminButton
              icon={<PublicIcon />}
              label="Plan forms"
              click={handleManagePlans}
            />

            <Button
              onClick={handleLogout}
              sx={{
                flexWrap: "nowrap",
                display: "flex",
                flexDirection: "row",
                width: "60%",
                backgroundColor: "black",
                gap: 1,
                ":hover": { backgroundColor: "red" },
              }}
              variant="contained"
            >
              <LogoutIcon />
              Logout
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          backgroundImage: `url(${black})`,
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{ color: "white", marginTop: "15px", fontFamily: "monospace" }}
        >
          Welcome To Your Admin Dashboard
        </h1>
        <h3 style={{ color: "white", fontFamily: "cursive" }}>YanYana Group</h3>

        <Box
          onClick={handleManageCruises}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "300px",
            backgroundImage: `url(${cruise})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 5,
            cursor: "pointer",
            transition: "box-shadow 0.3s ease, opacity 0.3s ease",
            ":hover": {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              opacity: "0.9",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: "0.6",
              borderRadius: 3,
              width: "50%",
            }}
          >
            <h4 style={{ margin: "8px", color: "white" }}> Manage Cruises </h4>
          </Box>
        </Box>
        <Box
          onClick={handleManageCities}
          sx={{
            width: "50%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${city})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 5,
            cursor: "pointer",
            transition: "box-shadow 0.3s ease, opacity 0.3s ease",
            ":hover": {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              opacity: "0.9",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: "0.6",
              borderRadius: 3,
              width: "50%",
            }}
          >
            <h4 style={{ margin: "8px", color: "white" }}> Manage Cities </h4>
          </Box>
        </Box>

        <Box
          onClick={handleManageBungalows}
          sx={{
            width: "50%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bungalow})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 5,
            cursor: "pointer",
            transition: "box-shadow 0.3s ease, opacity 0.3s ease",
            ":hover": {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              opacity: "0.9",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: "0.6",
              borderRadius: 3,
              width: "50%",
            }}
          >
            <h4 style={{ margin: "8px", color: "white" }}>
              {" "}
              Manage Bungalows{" "}
            </h4>
          </Box>
        </Box>
        <Box
          onClick={handleManagePlans}
          sx={{
            width: "50%",
            marginBottom: "15px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${plan})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 5,
            cursor: "pointer",
            transition: "box-shadow 0.3s ease, opacity 0.3s ease",
            ":hover": {
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              opacity: "0.9",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: "0.6",
              borderRadius: 3,
              width: "50%",
            }}
          >
            <h4 style={{ margin: "8px", color: "white" }}> Manage Plan </h4>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

