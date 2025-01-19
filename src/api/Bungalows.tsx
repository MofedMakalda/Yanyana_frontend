
// import { useEffect, useState } from "react";
// import { Box, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogContent, DialogActions, useMediaQuery } from "@mui/material";
// import ImageSlider from "../components/ImageSlider";


// interface Bungalow {
//   location: string;
//   capacity: string;
//   bungalowImages: string[];
// }

// const BungalowDetails: React.FC = () => {
//   const [bungalowData, setBungalowData] = useState<Bungalow[]>([]);
//   const [open, setOpen] = useState(false);
//   // const [currentBungalow, setCurrentBungalow] = useState<Bungalow | null>(null);
//   const [, setCurrentBungalow] = useState<Bungalow | null>(null);
//   const [dialogBody, setDialogBody] = useState<string[]>([]);
//   const isDesktop = useMediaQuery("(min-width:900px)");

//   const fetchBungalows = async () => {
//     try {
//       const response = await fetch(`http://localhost:3002/bungalows`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const bungalows = await response.json();
//       if (Array.isArray(bungalows)) {
//         setBungalowData(bungalows);
//       }
//     } catch (error) {
//       console.error("Error fetching bungalows:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBungalows();
//   }, []);

//   const handleClickOpen = (bungalow: Bungalow, images: string[]) => {
//     setCurrentBungalow(bungalow);
//     setDialogBody(images);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentBungalow(null);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         minHeight: "100vh",
//         backgroundColor: "#f7f7f7",
//         padding: 3,
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{ fontFamily: "initial", fontWeight: "bold", marginBottom: 3 }}
//       >
//         Bungalows
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           width: "100%",
//           maxWidth: "1200px",
//         }}
//       >
//         {bungalowData.length > 0 ? (
//           bungalowData.map((bungalow, index) => (
//             <Card
//               key={index}
//               sx={{
//                 display: "flex",
//                 flexDirection: isDesktop ? "row" : "column",
//                 boxShadow: "18px 18px 8px rgba(0, 51, 102, 0.2)",

//                 borderRadius: 2,
//                 overflow: "hidden",
//                 transition: "transform 0.3s ease",
//                 '&:hover': { transform: "scale(1.02)" },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 sx={{ width: isDesktop ? "40%" : "100%", height: isDesktop ? "350px" : "250px" }}
//                 image={bungalow.bungalowImages[0]}
//                 alt={bungalow.location}
//               />
//               <CardContent
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   // justifyContent: "space-between",
//                   alignItems: isDesktop ? "flex-start" : "center",
//                   padding: 3,
//                   width: isDesktop ? "60%" : "100%",
//                   backgroundColor: "#ffffff",
//                   borderLeft: isDesktop ? "4px solid #003366" : "none",
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: "bold",
//                     textAlign: isDesktop ? "left" : "center",
//                     marginBottom: 1,
//                     color: "#003366",
//                   }}
//                 >
//                   {bungalow.location}
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     textAlign: isDesktop ? "left" : "center",
//                     gap: 1,
//                     marginBottom: 2,
//                   }}
//                 >
//                   <Typography
//                     variant="body1"
//                     color="text.secondary"
//                     sx={{ fontSize: "16px" }}
//                   >
//                     Capacity: {bungalow.capacity}
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     alignSelf: isDesktop ? "flex-start" : "center",
//                     backgroundColor: "#003366",
//                     color: "white",
//                     '&:hover': { backgroundColor: "#002244" },
//                     fontSize: "14px",
//                     padding: "8px 16px",
//                     borderRadius: 20,
//                   }}
//                   onClick={() => handleClickOpen(bungalow, bungalow.bungalowImages)}
//                 >
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <Typography variant="h6" color="text.secondary">
//             No bungalows available
//           </Typography>
//         )}
//       </Box>

//       <Dialog
//         fullWidth
//         maxWidth="md"
//         open={open}
//         onClose={handleClose}
//         sx={{
//           "& .MuiDialog-paper": {
//             borderRadius: 3,
//           },
//         }}
//       >
//         <DialogContent sx={{ padding: 0 }}>
//           <ImageSlider imageUrls={dialogBody} />
//         </DialogContent>
//         <DialogActions
//           sx={{
//             backgroundColor: "#003366",
//             justifyContent: "center",
//           }}
//         >
//           <Button
//             onClick={handleClose}
//             sx={{ color: "white", fontFamily: "initial", fontSize: "16px" }}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default BungalowDetails;

import { useEffect, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogContent, DialogActions, useMediaQuery } from "@mui/material";
import ImageSlider from "../components/ImageSlider";


interface Bungalow {
  location: string;
  capacity: string;
  bungalowImages: string[];
}

const BungalowDetails: React.FC = () => {
  const [bungalowData, setBungalowData] = useState<Bungalow[]>([]);
  const [open, setOpen] = useState(false);
  // const [currentBungalow, setCurrentBungalow] = useState<Bungalow | null>(null);
  const [, setCurrentBungalow] = useState<Bungalow | null>(null);
  const [dialogBody, setDialogBody] = useState<string[]>([]);
  const isDesktop = useMediaQuery("(min-width:900px)");

  const fetchBungalows = async () => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/bungalows`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const bungalows = await response.json();
      if (Array.isArray(bungalows)) {
        setBungalowData(bungalows);
      }
    } catch (error) {
      console.error("Error fetching bungalows:", error);
    }
  };

  useEffect(() => {
    fetchBungalows();
  }, []);

  const handleClickOpen = (bungalow: Bungalow, images: string[]) => {
    setCurrentBungalow(bungalow);
    setDialogBody(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentBungalow(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: "initial", fontWeight: "bold", marginBottom: 3 }}
      >
        Bungalows
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {bungalowData.length > 0 ? (
          bungalowData.map((bungalow, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                boxShadow: "18px 18px 8px rgba(0, 51, 102, 0.2)",

                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                '&:hover': { transform: "scale(1.02)" },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: isDesktop ? "40%" : "100%", height: isDesktop ? "350px" : "250px" }}
                image={bungalow.bungalowImages[0]}
                alt={bungalow.location}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "space-between",
                  alignItems: isDesktop ? "flex-start" : "center",
                  padding: 3,
                  width: isDesktop ? "60%" : "100%",
                  backgroundColor: "#ffffff",
                  borderLeft: isDesktop ? "4px solid #003366" : "none",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: isDesktop ? "left" : "center",
                    marginBottom: 1,
                    color: "#003366",
                  }}
                >
                  {bungalow.location}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: isDesktop ? "left" : "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "16px" }}
                  >
                    Capacity: {bungalow.capacity}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    alignSelf: isDesktop ? "flex-start" : "center",
                    backgroundColor: "#003366",
                    color: "white",
                    '&:hover': { backgroundColor: "#002244" },
                    fontSize: "14px",
                    padding: "8px 16px",
                    borderRadius: 20,
                  }}
                  onClick={() => handleClickOpen(bungalow, bungalow.bungalowImages)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No bungalows available
          </Typography>
        )}
      </Box>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: 3,
          },
        }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <ImageSlider imageUrls={dialogBody} />
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "#003366",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ color: "white", fontFamily: "initial", fontSize: "16px" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BungalowDetails;
