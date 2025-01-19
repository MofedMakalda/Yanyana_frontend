// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MultiActionAreaCard from "../components/card";
// import { Box, Typography } from "@mui/material"; // Import MUI components

// interface CityData {
//   cityname: string;
//   cityImage: string; // This should be an array of image names
//   description: string;
//   hotels: {
//     hotelname: string;
//     nightpackage: string;
//     price: string;
//     address: string;
//     hotelImages: string[];
//     departure: string;
//     arrival: string;
//   }[];
// }

// export const AllCities = () => {
//   const [data, setData] = useState<CityData[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCities = async () => {
//       const response = await fetch("http://localhost:3002/cities");
//       if (!response.ok) {
//         console.error("Something went wrong with getting the cities");
//         return;
//       }
//       const cities = await response.json();
//       setData(cities);
//     };
//     fetchCities();
//   }, []);

//   const handleCardClick = (cityname: string) => {
//     navigate(`/cities/${cityname}/hotels`);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         justifyContent: "flex-start",
//         minHeight: "100vh",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{ fontFamily: "initial", fontWeight: "bold", marginBottom: 3, mt:3 }}
//       >
//         Explore Cities
//       </Typography>
//       {data.map((city) => (
//         <MultiActionAreaCard
          
//           key={city.cityname} // Using cityname as the key for uniqueness
//           title={city.cityname.toUpperCase()} // Make the title uppercase
//           image={city.cityImage} // Constructing the full URL
//           onClick={() => handleCardClick(city.cityname)} // Handle click to navigate
//         />
//       ))}
//     </Box>
//   );
// };
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiActionAreaCard from "../components/card";
import { Box, Typography } from "@mui/material"; // Import MUI components

interface CityData {
  cityname: string;
  cityImage: string; // This should be an array of image names
  description: string;
  hotels: {
    hotelname: string;
    nightpackage: string;
    price: string;
    address: string;
    hotelImages: string[];
    departure: string;
    arrival: string;
  }[];
}

export const AllCities = () => {
  const [data, setData] = useState<CityData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${process.env.API_BASE_URL}/cities`);
      if (!response.ok) {
        console.error("Something went wrong with getting the cities");
        return;
      }
      const cities = await response.json();
      setData(cities);
    };
    fetchCities();
  }, []);

  const handleCardClick = (cityname: string) => {
    navigate(`/cities/${cityname}/hotels`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: "initial", fontWeight: "bold", marginBottom: 3, mt:3 }}
      >
        Explore Cities
      </Typography>
      {data.map((city) => (
        <MultiActionAreaCard
          
          key={city.cityname} // Using cityname as the key for uniqueness
          title={city.cityname.toUpperCase()} // Make the title uppercase
          image={city.cityImage} // Constructing the full URL
          onClick={() => handleCardClick(city.cityname)} // Handle click to navigate
        />
      ))}
    </Box>
  );
};
