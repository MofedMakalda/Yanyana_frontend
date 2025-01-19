// import {
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// interface CardProps {
//   location: string;
//   capacity: string;
//   image: string;
//   onClick: () => void;
// }


// const CardComponent = ({ image, location, capacity, onClick }: CardProps) => {
//   const isMobile = useMediaQuery("(max-width:900px)");

//   const handleInput = () => {
//   return   
//   }

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         marginTop: "10px",
//         height: { xs: "", md: "200px" },
//         flexDirection: { xs: "column", md: "row" },
//         width: { xs: "80%", md: "40%" },
//         gap: 1,
//       }}
//     >
//       <Container
//         disableGutters
//         sx={{
//           position: "relative",
//           width: { xs: "100%", md: "50%" },
//           height: { xs: "150px", md: "200px" },
//         }}
//       >
//         {/* Image */}
//         <CardMedia
//           sx={{ height: "100%", width: "100%", objectFit: "cover" }}
//           image={image}
//           component="img"
//         />

//         <Button
//           variant="contained"
//           sx={{
//             position: "absolute",
//             bottom: 10, // Adjust this value to control distance from the bottom
//             left: "50%",
//             transform: "translateX(-50%)", // Center horizontally
//             color: "white",
//             fontSize: {
//               xs: 12,
//               md: 12,
//             }, 
//           }}
//           onClick={onClick}
//         >
//           More Images
//         </Button>
//       </Container>

//       {/* Card content (location, capacity) */}
//       <Container disableGutters sx={{ width: { xs: "80%", md: "50%" } }}>
//         <CardContent
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 3,
//           }}
//         >
//           {isMobile ? (
//             <Typography
//               sx={{ color: "text.secondary", fontSize: { xs: 14, md: 18 } }}
//             >
//               {"Location is:"} <br />
//               {location}
//             </Typography>
//           ) : (
//             <Typography
//               sx={{ color: "text.secondary", fontSize: { xs: 14, md: 18 } }}
//             >
//               {`Location is: ${location}`}
//             </Typography>
//           )}
//         {isMobile ? (
//             <Typography
//               sx={{ color: "text.secondary", fontSize: { xs: 14, md: 18 } }}
//             >
//               {"Capacity is:"} <br />
//               {capacity}
//             </Typography>
//           ) : (
//             <Typography
//               sx={{ color: "text.secondary", fontSize: { xs: 14, md: 18 } }}
//             >
//               {`Capacity is:${capacity}`}
//             </Typography>
//           )}
//         </CardContent>
//       </Container>
//     </Card>
//   );
// };

// export default CardComponent;
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
interface CardProps {
  location: string;
  capacity: string;
  image: string;
  onClick: () => void;
}


const CardComponent = ({ image, location, capacity, onClick }: CardProps) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "10px",
        height: { xs: "", md: "200px" },
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "80%", md: "40%" },
        gap: 1,
      }}
    >
      <Container
        disableGutters
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          height: { xs: "250px", md: "200px" },
        }}
      >
        {/* Image */}
        <CardMedia
          sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          image={image}
          component="img"
        />

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: 10, // Adjust this value to control distance from the bottom
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally
            color: "white",
            fontSize: {
              xs: 12,
              md: 12,
            }, 
          }}
          onClick={onClick}
        >
          More Images
        </Button>
      </Container>

      {/* Card content (location, capacity) */}
      <Container disableGutters sx={{ width: { xs: "100%", md: "50%" }, height:{xs:"", md:""} }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {isMobile ? (
            <Typography
              sx={{ color: "text.secondary", fontSize: { xs:"20px", md: "25px" }, fontFamily:"initial" }}
            >
              {"Location:"} <br />
              {location}
            </Typography>
          ) : (
            <Typography
              sx={{ color: "text.secondary", fontSize: { xs:"20px", md: "25px"}, fontFamily:"initial" }}
            >
              {`Location: ${location}`}
            </Typography>
          )}
        {isMobile ? (
            <Typography
              sx={{ color: "text.secondary", fontSize: {xs:"20px", md: "25px" }, fontFamily:"initial" }}
            >
              {"Capacity:"} <br />
              {capacity}
            </Typography>
          ) : (
            <Typography
              sx={{ color: "text.secondary", fontSize: {xs:"20px", md: "25px"}, fontFamily:"initial" }}
            >
              {`Capacity:${capacity}`}
            </Typography>
          )}
        </CardContent>
      </Container>
    </Card>
  );
};

export default CardComponent;
