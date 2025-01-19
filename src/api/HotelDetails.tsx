// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Box,
//   Dialog,
//   Button,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

// import ImageSlider from "../components/ImageSlider";

// export const HotelDetails = () => {
//   const { cityname } = useParams<{ cityname: string }>();
//   const [hotels, setHotels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   // const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentImageIndex] = useState(0);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [dialogTitle, setDialogTitle] = useState("");
//   const [dialogBody, setDialogBody] = useState<string[]>([]);
  
//   const handleMoreImagesClick = (
//     hotelName: string,
//     images: string[],

//   ) => {
//     setDialogTitle(hotelName);
//     setDialogBody(images);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };
  
  
//   useEffect(() => {
//     const fetchCityHotels = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3002/cities/${cityname}/hotels`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const cityData = await response.json();
//         setHotels(cityData.hotels || []); // Ensure hotels is an array
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCityHotels();
//   }, [cityname]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;


//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "center",minHeight:"100vh" }}
//     >
//       <h1 style={{fontFamily:"initial", marginTop:"10px"}}>Hotels in {cityname}</h1>

//       {hotels.length > 0 ? (
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems:"center",
//             position: "relative",
//           }}
//         >
//           {hotels.map((hotel, index) => (
//             <Card
//               key={index}
//               sx={{
//                 width: "80%",
//                 margin: "16px",
//                 display: "flex",
//                 flexDirection: { md: "row-reverse", xs: "column" },
//                 height: { xs: "auto", md: "400px" },
//                 borderRadius:"20px",
//                 boxShadow: "18px 18px 8px rgba(0, 51, 102, 0.2)",
//               }}
//             >
//               <CardContent
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   width: { md: "100%" },
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontWeight: "bold",
//                       fontSize: { xs: "18px", md: "25px" },
//                       color: "#003366",
//                     }}
//                   >
//                     {hotel.hotelname}
//                   </Typography>
//                   <Box
//                     sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                   >
//                     <Typography
//                       sx={{ fontSize: { xs: "17px", md: "22px" } }}
//                     >{`${hotel.departure} Until ${hotel.arrival}`}</Typography>
//                   </Box>
//                   <Typography
//                     sx={{
//                       color: "red",
//                       fontWeight: "bold",
//                       fontSize: { xs: "18px", md: "20px" },
//                     }}
//                   >
//                     {hotel.price}
//                   </Typography>
//                 </Box>

//                 <Box>
//                   <Typography sx={{ fontSize: { xs: "12px", md: "20px" } }}>
//                     * Price includes: Flights, Hotel, Transportation (From and
//                     to the Airport)
//                   </Typography>
//                   <Typography sx={{ fontSize: { xs: "12px", md: "20px" } }}>
//                     * The price isn't fixed, for final details please contact
//                     the office
//                   </Typography>
//                 </Box>
//               </CardContent>

//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 position="relative"
//               >
//                 {hotel.hotelImages?.length > 0 && (
//                   <CardMedia
//                     component="img"
//                     image={hotel.hotelImages[currentImageIndex] || ""} // Display current image or empty if undefined
//                     alt={hotel.hotelname}
//                     sx={{
//                       objectFit: "cover",
//                       cursor: "pointer",
//                       width: { md: "500px", xs: "320px" },
//                       height: { md: "500px", xs: "220px" },
//                     }}
              
//                     // onClick={handleImageClick}
//                   />
//                 )}
//                     <Button
//                       onClick={()=>handleMoreImagesClick(hotel.hotelname ,hotel.hotelImages)}
//                       sx={{
//                         position: "absolute",
//                         bottom: "15px",
//                         backgroundColor: "black",
//                         color: "white",
//                         width:{
//                           md:"250px",
//                           xs:"150px"
//                         },
//                         height:{
//                           md:"80px",
//                           xs:"40px"
//                         },
                        
//                         borderRadius:"20px"
//                       }}
//                     >
//                       More Images
//                     </Button>
//               </Box>
//             </Card>
//           ))}
//         </Box>
//       ) : (
//         <p>No Hotels Found For This City.</p>
//       )}
//           <Dialog
//         fullWidth
//         sx={{
//           "& .MuiDialog-paper": {
//             width: {
//               xs: "90%",
//               sm: "80%",
//               md: "70%",
//               lg: "60%",
//               xl: "50%",
//             },
//             maxWidth: "none",
//           },
//         }}
//         open={openDialog}
//         onClose={handleCloseDialog}
//       >
//         <DialogTitle
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "#003366",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: "bold",
//               fontFamily: "initial",
//               fontSize: "20px",
//               alignSelf: "center",
//               marginBottom: "10px",
//               color: "white",
//             }}
//           >
//             {dialogTitle}
//           </Typography>
          
       
//         </DialogTitle>
//         <DialogContent style={{ width: "100%", height: "100%", padding: 0 }}>
//           <div style={{ width: "100%" }}>
//             <ImageSlider imageUrls={dialogBody} />
//           </div>
//         </DialogContent>
//         <DialogActions
//           sx={{
//             backgroundColor: "#003366",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Button
//             sx={{ color: "white", fontFamily: "initial", fontSize: "20px" }}
//             onClick={handleCloseDialog}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import ImageSlider from "../components/ImageSlider";

export const HotelDetails = () => {
  const { cityname } = useParams<{ cityname: string }>();
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogBody, setDialogBody] = useState<string[]>([]);
  
  const handleMoreImagesClick = (
    hotelName: string,
    images: string[],

  ) => {
    setDialogTitle(hotelName);
    setDialogBody(images);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  
  useEffect(() => {
    const fetchCityHotels = async () => {
      try {
        const response = await fetch(`https://yanyana-c668fa5fd9ac.herokuapp.com/cities/${cityname}/hotels`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const cityData = await response.json();
        setHotels(cityData.hotels || []); // Ensure hotels is an array
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCityHotels();
  }, [cityname]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center",minHeight:"100vh" }}
    >
      <h1 style={{fontFamily:"initial", marginTop:"10px"}}>Hotels in {cityname}</h1>

      {hotels.length > 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            position: "relative",
          }}
        >
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              sx={{
                width: "80%",
                margin: "16px",
                display: "flex",
                flexDirection: { md: "row-reverse", xs: "column" },
                height: { xs: "auto", md: "400px" },
                borderRadius:"20px",
                boxShadow: "18px 18px 8px rgba(0, 51, 102, 0.2)",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: { md: "100%" },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "18px", md: "25px" },
                      color: "#003366",
                    }}
                  >
                    {hotel.hotelname}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <Typography
                      sx={{ fontSize: { xs: "17px", md: "22px" } }}
                    >{`${hotel.departure} Until ${hotel.arrival}`}</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: { xs: "18px", md: "20px" },
                    }}
                  >
                    {hotel.price}
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontSize: { xs: "12px", md: "20px" } }}>
                    * Price includes: Flights, Hotel, Transportation (From and
                    to the Airport)
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "12px", md: "20px" } }}>
                    * The price isn't fixed, for final details please contact
                    the office
                  </Typography>
                </Box>
              </CardContent>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
              >
                {hotel.hotelImages?.length > 0 && (
                  <CardMedia
                    component="img"
                    image={hotel.hotelImages[currentImageIndex] || ""} // Display current image or empty if undefined
                    alt={hotel.hotelname}
                    sx={{
                      objectFit: "cover",
                      cursor: "pointer",
                      width: { md: "500px", xs: "320px" },
                      height: { md: "500px", xs: "220px" },
                    }}
              
                    // onClick={handleImageClick}
                  />
                )}
                    <Button
                      onClick={()=>handleMoreImagesClick(hotel.hotelname ,hotel.hotelImages)}
                      sx={{
                        position: "absolute",
                        bottom: "15px",
                        backgroundColor: "black",
                        color: "white",
                        width:{
                          md:"250px",
                          xs:"150px"
                        },
                        height:{
                          md:"80px",
                          xs:"40px"
                        },
                        
                        borderRadius:"20px"
                      }}
                    >
                      More Images
                    </Button>
              </Box>
            </Card>
          ))}
        </Box>
      ) : (
        <p>No Hotels Found For This City.</p>
      )}
          <Dialog
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "50%",
            },
            maxWidth: "none",
          },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#003366",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "initial",
              fontSize: "20px",
              alignSelf: "center",
              marginBottom: "10px",
              color: "white",
            }}
          >
            {dialogTitle}
          </Typography>
          
       
        </DialogTitle>
        <DialogContent style={{ width: "100%", height: "100%", padding: 0 }}>
          <div style={{ width: "100%" }}>
            <ImageSlider imageUrls={dialogBody} />
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "#003366",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ color: "white", fontFamily: "initial", fontSize: "20px" }}
            onClick={handleCloseDialog}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};



