import { Box, Button, Container, Typography, Modal, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cruise from "../assets/cruise/cruise.jpg";
import cruiseMobile from "../assets/cruise/cruiseMoblie.jpg";

export const Cruises = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthClick = (month: string) => {
    handleClose(); // Close the modal
    navigate(`/cruise/${month}`); // Ensure the month is in lowercase for the route
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0", // Special color for the remaining space
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: {
            md: `url(${cruise})`,
            xs: `url(${cruiseMobile})`,
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            md: "center",
            xs: "top center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: {
              md: "300px",
              xs: "200px",
            },
            height: {
              md: "140px",
              xs: "120px",
            },
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.6)", // White background with transparency
            padding: "20px", // Padding inside the box
            borderRadius: "8px", // Rounded corners
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          }}
        >
          <Typography
            sx={{ fontFamily: "monospace", fontWeight: "Bold" }}
            variant="h6"
            align="center"
          >
            Plan Your Vacation
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "white",
              width: {
                md: "100px",
                xs: "90px",
              },
              height: {
                md: "30px",
                xs: "25px",
              },
              fontSize: {
                md: "15px",
                xs: "14px",
              },
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={handleOpen}
          >
            Explore
          </Button>
        </Box>
      </Container>

      {/* Modal Component for Lightbox */}
      <Modal
       
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            width: "80%",
            maxWidth: "500px",
          }}
        >
          <Typography
            sx={{ fontWeight: "Bold", fontFamily: "'Times New Roman', serif" }}
            variant="h6"
            align="center"
            gutterBottom
          >
            Select a Month
          </Typography>
          <Grid container spacing={2}>
            {months.map((month, index) => (
              <Grid item xs={6} key={index}>
                <Button
                  variant="contained"
                  sx={{fontSize:{xs:"12px"},fontWeight:"bold", fontFamily:"monospace"} }
                  fullWidth
                  onClick={() => handleMonthClick(month)} // Call handleMonthClick on button click
                >
                  {month}- {index + 1}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </Container>
  );
};
