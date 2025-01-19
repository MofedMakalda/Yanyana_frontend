

// import { useEffect, useState } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   useMediaQuery,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Box,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import ImageSlider from "../components/ImageSlider";

// interface CruiseDetail {
//   mainImage: string[];
//   images: string[];
//   cruisename: string;
//   destinations: string;
//   nights: string;
//   date: string;
// }

// interface Cruise {
//   _id: string;
//   cruisedetails: CruiseDetail[];
// }

// export const CruiseDetails = () => {
//   const isDesktop = useMediaQuery("(min-width:900px)");
//   const { month } = useParams<{ month: string }>();
//   const [data, setData] = useState<CruiseDetail[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [openDialog, setOpenDialog] = useState(false);
//   const [dialogTitle, setDialogTitle] = useState("");
//   const [dialogPlaces, setDialogPlaces] = useState("");
//   const [dialogDate, setDialogDate] = useState("");
//   const [dialogBody, setDialogBody] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchCruises = async () => {
//       try {
//         const response = await fetch(`http://localhost:3002/cruise/${month}`);
//         if (!response.ok) {
//           if (response.status === 404) {
//             setData([]);
//           } else {
//             throw new Error(
//               `HTTP Status ${response.status}: ${response.statusText}`
//             );
//           }
//         } else {
//           const cruisesData: Cruise = await response.json();
//           setData(cruisesData.cruisedetails || []);
//         }
//       } catch (error: any) {
//         console.error("Fetch error:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCruises();
//   }, [month]);

//   const handleMoreImagesClick = (
//     cruiseName: string,
//     images: string[],
//     cruisePlaces: string,
//     date: any
//   ) => {
//     setDialogTitle(cruiseName);
//     setDialogPlaces(cruisePlaces);
//     setDialogDate(date);
//     setDialogBody(images);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div style={{ minHeight: "100vh", width: "100%", background: "#f4f4f9" }}>
//       <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
//         {data.length > 0 ? (
//           <Typography
//             sx={{
//               textAlign: "center",
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: "bold",
//               color: "#003366",
//               mt:2,
//               mb:2
              
//             }}
//             variant="h4"
//           >
//             Cruises in {month}
//           </Typography>
//         ) : (
//           <Typography></Typography>
//         )}

//         {data.length > 0 ? (
//           data.map((detail, index) => (
//             <Card
//               key={index}
//               sx={{
//                 marginBottom: 3,
//                 display: "flex",
//                 flexDirection: { xs: "column", md: "row" },
//                 background: "white",
//                 borderRadius: "10px",
//                 overflow: "hidden",
//                 height: { md: "250px" },
//                 boxShadow: "18px 18px 8px rgba(0, 51, 102, 0.2)",
//                 width:"80%"
//               }}
//             >
//               <CardMedia
//                 sx={{
//                   display: "flex",
//                   gap: 1,
//                   overflowX: "auto",
//                   padding: 1,
//                   position: "relative",
//                   // backgroundColor: "#f0f0f0",
//                   backgroundColor: "grey",
//                 }}
//               >
//                 <img
//                   style={{
//                     width: isDesktop ? "350px" : "100%",
//                     height: isDesktop ? "auto" : "250px",
//                     borderRadius: "5px",
//                   }}
//                   src={detail.mainImage[0]}
//                   alt={detail.cruisename}
//                 />
//                 <Button
//                   onClick={() =>
//                     handleMoreImagesClick(
//                       detail.cruisename,
//                       detail.images,
//                       detail.destinations,
//                       detail.date
//                     )
//                   }
//                   sx={{
//                     position: "absolute",
//                     bottom: "20px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     backgroundColor: "#003366",
//                     color: "white",
//                     fontWeight: "bold",
//                     fontSize: "12px",
//                     width: "120px",
//                     "&:hover": {
//                       backgroundColor: "#002244",
//                     },
//                   }}
//                 >
//                   More Images
//                 </Button>
//               </CardMedia>
//               <CardContent sx={{ padding: 3 }}>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontFamily: "'Poppins', sans-serif",
//                     fontWeight: "bold",
//                     color: "#003366",
//                   }}
//                 >
//                   {detail.cruisename}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "#666",
//                     fontFamily: "'Poppins', sans-serif",
//                     mt: 1,
//                   }}
//                 >
//                   {detail.destinations}
//                 </Typography>
//                 <Typography sx={{ color: "#666", mt: 1 }}>
//                   {detail.nights}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: "#003366",
//                     fontWeight: "bold",
//                     fontFamily: "'Poppins', sans-serif",
//                     mt: 1,
//                   }}
//                 >
//                   {new Date(detail.date).toLocaleDateString()}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               marginTop: "50px",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ color: "gray", textAlign: "center", marginBottom: "20px" }}
//             >
//               No Cruises Available for {month}
//             </Typography>
//           </div>
//         )}
//       </Box>

//       <Dialog
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
//             borderRadius: "15px",
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
//             color: "white",
//             textAlign: "center",
//             padding: "16px",
//             borderRadius: "10px 10px 0 0",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: "bold",
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: "20px",
//             }}
//           >
//             {dialogTitle}
//           </Typography>
//           <Typography>{new Date(dialogDate).toLocaleDateString()}</Typography>
//           <Typography>{dialogPlaces}</Typography>
//         </DialogTitle>
//         <DialogContent
//           style={{
//             width: "100%",
//             height: "100%",
//             padding: 0,
//             backgroundColor: "#f4f4f9",
//           }}
//         >
//           <Box >
//             <ImageSlider imageUrls={dialogBody} />
//           </Box>
//         </DialogContent>
//         <DialogActions
//           sx={{
//             backgroundColor: "#003366",
//             display: "flex",
//             justifyContent: "center",
//             padding: "10px",
//             borderRadius: "0 0 10px 10px",
//           }}
//         >
//           <Button
//             sx={{
//               color: "white",
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: "16px",
//               textTransform: "none",
//             }}
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
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

interface CruiseDetail {
  mainImage: string[];
  images: string[];
  cruisename: string;
  destinations: string;
  nights: string;
  date: string;
}

interface Cruise {
  _id: string;
  cruisedetails: CruiseDetail[];
}

export const CruiseDetails = () => {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const { month } = useParams<{ month: string }>();
  const [data, setData] = useState<CruiseDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogPlaces, setDialogPlaces] = useState("");
  const [dialogDate, setDialogDate] = useState("");
  const [dialogBody, setDialogBody] = useState<string[]>([]);

  useEffect(() => {
    const fetchCruises = async () => {
      try {
        const response = await fetch(`${process.env.API_BASE_URL}/cruise/${month}`);
        if (!response.ok) {
          if (response.status === 404) {
            setData([]);
          } else {
            throw new Error(
              `HTTP Status ${response.status}: ${response.statusText}`
            );
          }
        } else {
          const cruisesData: Cruise = await response.json();
          setData(cruisesData.cruisedetails || []);
        }
      } catch (error: any) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCruises();
  }, [month]);

  const handleMoreImagesClick = (
    cruiseName: string,
    images: string[],
    cruisePlaces: string,
    date: any
  ) => {
    setDialogTitle(cruiseName);
    setDialogPlaces(cruisePlaces);
    setDialogDate(date);
    setDialogBody(images);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#f4f4f9" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
        {data.length > 0 ? (
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "bold",
              color: "#003366",
              mt:2,
              mb:2
              
            }}
            variant="h4"
          >
            Cruises in {month}
          </Typography>
        ) : (
          <Typography></Typography>
        )}

        {data.length > 0 ? (
          data.map((detail, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: 3,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                height: { md: "250px" },
                boxShadow: "18px 18px 8px rgba(0, 51, 102, 0.2)",
                width:"80%"
              }}
            >
              <CardMedia
                sx={{
                  display: "flex",
                  gap: 1,
                  overflowX: "auto",
                  padding: 1,
                  position: "relative",
                  // backgroundColor: "#f0f0f0",
                  backgroundColor: "grey",
                }}
              >
                <img
                  style={{
                    width: isDesktop ? "350px" : "100%",
                    height: isDesktop ? "auto" : "250px",
                    borderRadius: "5px",
                  }}
                  src={detail.mainImage[0]}
                  alt={detail.cruisename}
                />
                <Button
                  onClick={() =>
                    handleMoreImagesClick(
                      detail.cruisename,
                      detail.images,
                      detail.destinations,
                      detail.date
                    )
                  }
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#003366",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "12px",
                    width: "120px",
                    "&:hover": {
                      backgroundColor: "#002244",
                    },
                  }}
                >
                  More Images
                </Button>
              </CardMedia>
              <CardContent sx={{ padding: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "bold",
                    color: "#003366",
                  }}
                >
                  {detail.cruisename}
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    fontFamily: "'Poppins', sans-serif",
                    mt: 1,
                  }}
                >
                  {detail.destinations}
                </Typography>
                <Typography sx={{ color: "#666", mt: 1 }}>
                  {detail.nights}
                </Typography>
                <Typography
                  sx={{
                    color: "#003366",
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                    mt: 1,
                  }}
                >
                  {new Date(detail.date).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "gray", textAlign: "center", marginBottom: "20px" }}
            >
              No Cruises Available for {month}
            </Typography>
          </div>
        )}
      </Box>

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
            borderRadius: "15px",
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
            color: "white",
            textAlign: "center",
            padding: "16px",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "20px",
            }}
          >
            {dialogTitle}
          </Typography>
          <Typography>{new Date(dialogDate).toLocaleDateString()}</Typography>
          <Typography>{dialogPlaces}</Typography>
        </DialogTitle>
        <DialogContent
          style={{
            width: "100%",
            height: "100%",
            padding: 0,
            backgroundColor: "#f4f4f9",
          }}
        >
          <Box >
            <ImageSlider imageUrls={dialogBody} />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "#003366",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Button
            sx={{
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
              textTransform: "none",
            }}
            onClick={handleCloseDialog}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


