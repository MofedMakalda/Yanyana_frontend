import { Box, Button, Container } from "@mui/material";
import backgroundImageDesktop from "../assets/Summer.jpg";
import cruise from "../assets/cruise.jpg";
import bungalow from "../assets/bungalow.png";
import PlanImage from "../assets/plan.jpg";
import BoxSx from "../components/box";
import hours from "../assets/icons/hours.png";
import like from "../assets/icons/like.png";
import meeting from "../assets/icons/meeting.png";
import payment from "../assets/icons/payment.png";
import world from "../assets/icons/world.png";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate= useNavigate();
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Summer Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImageDesktop})`,
          backgroundSize: {
            md: "cover",
            xs: "contain", // Use contain for mobile
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            md: "center",
            xs: "top center", // Position for mobile
          },
          width: "100%",
          height: {
            xs: "160px",
            sm: "300px",
            md: "550px",
          },
          marginBottom: {
            xs: 1, // No margin
          },
          padding: 0, // No padding
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            width: {
              md: "170px",
              xs: "90px",
            },
            height: {
              md: "50px",
              xs: "25px",
            },
            fontSize: {
              md: "20px",
              xs: "12px",
            },
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: {
              xs: "8px 16px",
              sm: "10px 20px",
            },
            margin: 0, // No margin for button
            alignSelf: "center", // Center button horizontally
          }}
          onClick={()=> navigate(`/cities`)}
        >
          SUMMER
        </Button>
      </Box>

      {/* Container for Boxes Below */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: 0, // No padding
          margin: 0, // No margin
        }}
      >
        {/* Info Boxes */}
        <Box
          sx={{
            display: "flex",
            gap: {
              md: 1,
              xs: 2,
            },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: {
              md: "70%",
              xs: "80%",
            },
          }}
        >
          <BoxSx text="" iconSrc={hours} />
          <BoxSx text="Distinguished team that speaks 8 languages" iconSrc={meeting} />
          <BoxSx text="Two branches globally" iconSrc={world} />
          <BoxSx text="8 years experience" iconSrc={like} />
          <BoxSx text="Convenient payment methods" iconSrc={payment} />
        </Box>

        {/* Plan Box */}
        <Box
          sx={{
            display: "flex",
            borderRadius: 3,
            overflow: "hidden", // Added overflow hidden
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${PlanImage})`,
            backgroundSize: {
              md: "cover",
              xs: "contain",
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              md: "center",
              xs: "top center",
            },
            width: {
              md: "80%",
              xs: "90%",
            },
            height: {
              xs: "100px",
              md: "450px",
            },
            margin: 1, // No margin
            padding: 0, // No padding
          }}
        >
          <Button
            variant="contained"
            onClick={()=>navigate('/plan')}
            sx={{
              color: "white",
              width: {
                md: "170px",
                xs: "90px",
              },
              height: {
                md: "50px",
                xs: "25px",
              },
              fontSize: {
                md: "20px",
                xs: "8px",
              },
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: {
                md: "10px 20px",
                xs: "5px 10px",
              },
              marginRight: {
                md: "220px",
                xs: "50px",
              },
              marginTop: {
                md: "25px",
                xs: "25px",
              },
            }}
          >
            Plan
          </Button>
        </Box>
      </Container>

      {/* Bungalows Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bungalow})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: {
            xs: "200px",
            sm: "300px",
            md: "450px",
          },
          margin: 0, // No margin
          padding: 0, // No padding
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            width: {
              md: "170px",
              xs: "90px",
            },
            height: {
              md: "50px",
              xs: "25px",
            },
            fontSize: {
              md: "20px",
              xs: "12px",
            },
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: {
              md: "10px 20px",
              xs: "5px 10px",
            },
            margin: 0, // No margin for button
          }}
          onClick={()=> navigate(`/bungalows`)}
        >
          Bungalows
        </Button>
      </Box>

      {/* Cruise Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${cruise})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: {
            xs: "200px",
            sm: "300px",
            md: "450px",
          },
          margin: 0, // No margin
          padding: 0, // No padding
        }}
      >
        <Button
        
          variant="contained"
          
          sx={{
            width: {
              md: "170px",
              xs: "90px",
            },
            height: {
              md: "50px",
              xs: "25px",
            },
            color: "white",
            fontSize: {
              md: "20px",
              xs: "12px",
            },
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: {
              md: "10px 20px",
              xs: "5px 10px",
            },
            margin: 0, // No margin for button
          }}
          onClick={()=> navigate(`/cruise`)}
        >
          Cruise
        </Button>
      </Box>
    </Container>
  );
};
