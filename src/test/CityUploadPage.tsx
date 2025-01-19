
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import background from "../assets/background1.png";


const tableHead = [
  "City Name",
  "Description",
  "Hotel Name",
  "Hotel Images",
  "Nightpackage",
  "Price",
  "Departure",
  "Arrival",
  "Action",
];

interface HotelData {
  hotelname: string;
  nightpackage: string;
  price: string;
  address: string;
  departure: string;
  arrival: string;
  hotelImages: File[];
}

interface CityData {
  cityname: string;
  description?: string;
  cityImage: File | null;
  hotels: HotelData;
}

interface Hotel {
  _id: string;
  hotelname: string;
  nightpackage: string;
  price: string;
  address: string;
  departure: string;
  arrival: string;
  hotelImages: string[];
}

interface City {
  _id: string;
  cityname: string;
  cityImage: string;
  description: string;
  hotels: Hotel[];
}

const CityUploadPage = () => {
  const [cityData, setCityData] = useState<CityData>({
    cityname: '',
    description: '',
    cityImage: null,
    hotels: {
      hotelname: '',
      nightpackage: '',
      price: '',
      address: '',
      departure: '',
      arrival: '',
      hotelImages: []
    },
  });

  const handleCityInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCityData({ ...cityData, [name]: value });
  };

  const handleCityImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setCityData({ ...cityData, cityImage: file });
  };

  const handleHotelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCityData({
      ...cityData,
      hotels: { ...cityData.hotels, [name]: value },
    });
  };

  const handleHotelImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setCityData({
      ...cityData,
      hotels: { ...cityData.hotels, hotelImages: files },
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cityname", cityData.cityname);
    if (cityData.description) {
      formData.append("description", cityData.description);
    }
    if (cityData.cityImage) {
      formData.append("cityImage", cityData.cityImage);
    }

    const hotel = cityData.hotels;
    formData.append("hotels[0][hotelname]", hotel.hotelname);
    formData.append("hotels[0][nightpackage]", hotel.nightpackage);
    formData.append("hotels[0][price]", hotel.price);
    formData.append("hotels[0][address]", hotel.address);
    formData.append("hotels[0][departure]", hotel.departure);
    formData.append("hotels[0][arrival]", hotel.arrival);

    hotel.hotelImages.forEach((image) => {
      formData.append("hotelImages", image);
    });

    try {
      const response = await fetch("https://yanyana-c668fa5fd9ac.herokuapp.com/cities", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload city data");
      }

      const data = await response.json();
      console.log("City uploaded successfully:", data);
      alert("City and Hotels uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while uploading city data");
    }
  };

  const [cities, setCities] = useState<City[]>([]);

  const fetchCities = async () => {
    try {
      const response = await fetch("https://yanyana-c668fa5fd9ac.herokuapp.com/cities");
      if (response.ok) {
        const data = await response.json();
        setCities(data);
      } else {
        console.error("Failed to fetch cities.");
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const deleteHotel = async (cityId: string, hotelId: string) => {
    try {
      const response = await fetch(
        `https://yanyana-c668fa5fd9ac.herokuapp.com/cities/${cityId}/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Hotel deleted successfully");
        fetchCities();
      } else {
        console.error("Failed to delete hotel.");
      }
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  const deleteCity = async (cityId: string) => {
    try {
      const response = await fetch(`https://yanyana-c668fa5fd9ac.herokuapp.com/cities/${cityId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Hotel deleted successfully");
        fetchCities();
      } else {
        console.error("Failed to delete hotel.");
      }
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight:"100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
          width: "100%",
          
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px",
            paddingTop: "15px",
            color: "gold",
          }}
          variant="h4"
        >
          Manage Cities
        </Typography>
        <form style={{ display: "flex", flexDirection:"column",justifyContent:"center", width:"100%" }} onSubmit={handleSubmit}>
          <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%", gap:"200px"}}>
            <Box sx={{display:"flex", flexDirection:"column"}}>
              <h1 style={{color:"white"}}>City Details</h1>
                <input
                  type="text"
                  name="cityname"
                  value={cityData.cityname}
                  onChange={handleCityInputChange}
                  placeholder="City Name"
                  required
                />         
                <textarea
                  name="description"
                  value={cityData.description}
                  onChange={handleCityInputChange}
                  placeholder="Description"
                />     
              <div style={{display:"flex", flexDirection:"column", gap:"5px" }}>
                <label style={{color:"yellow", marginTop:"10px", marginLeft:"5px"}}>City Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCityImageChange}
                />
              </div>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column"}}>
              <h1 style={{color:"white"}}>Hotel Details</h1>
              
                
                <input
                  type="text"
                  name="hotelname"
                  value={cityData.hotels.hotelname}
                  onChange={handleHotelInputChange}
                  placeholder="Hotel Name"
                  required
                />
              
              
                
                <input
                  type="text"
                  name="nightpackage"
                  value={cityData.hotels.nightpackage}
                  onChange={handleHotelInputChange}
                  required
                  placeholder="Night Package"
                />
              
              
                
                <input
                  type="text"
                  name="price"
                  value={cityData.hotels.price}
                  onChange={handleHotelInputChange}
                  placeholder="Price"
                  required
                />
              
             
                <input
                  type="text"
                  name="address"
                  value={cityData.hotels.address}
                  onChange={handleHotelInputChange}
                  placeholder="Address"
                  required
                />
             
           
                <input
                  type="text"
                  name="departure"
                  value={cityData.hotels.departure}
                  onChange={handleHotelInputChange}
                  required
                  placeholder="Departure"
                />
              
             
                <input
                  type="text"
                  name="arrival"
                  value={cityData.hotels.arrival}
                  onChange={handleHotelInputChange}
                  required
                  placeholder="Arrival"
                />
             <div style={{display:"flex", flexDirection:"column", gap:"5px" }}>
             <label style={{color:"yellow", marginTop:"10px", marginLeft:"5px"}}>Hotel Images:</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleHotelImagesChange}
                  required
                />
              </div>
            </Box>
            
          </Box>         
           <button style={{height:"50px", alignSelf:"center", fontSize:"30px", marginTop:"20px", width:"500px"}} type="submit">Submit</button>
        </form>
        <Box sx={{width:"100%", borderBottom:"5px solid ", marginTop:"20px"}}></Box>
      </Box>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px",
            paddingTop: "15px",
            color: "gold",
          }}
          variant="h4"
        >
          Existing Cities
        </Typography>
        {cities.map((city) => (
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}} key={city._id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "500px",
                backgroundColor:"grey",
                justifyContent: "space-evenly",
                alignItems:"center",
                borderRadius:"10px"
              }}
            >
              <Typography sx={{ color: "white", fontSize:"30px" }}>{city.cityname}</Typography>
              <Button
                onClick={() => deleteCity(city._id)}
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  ":hover": {
                    backgroundColor: "darkred",
                  },
                }}
              >
                Delete
              </Button>
            </Box>
            <TableContainer sx={{ marginTop: "20px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHead.map((cell, index) => (
                      <TableCell
                        sx={{
                          textAlign: "center",
                          border: "3px solid white",
                          color: "white",
                          fontSize: "30px",
                        }}
                        key={index}
                      >
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {city.hotels.map((hotel) => (
                    <TableRow key={hotel._id}>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography sx={{ color: "gold", fontSize: "20px" }}>
                          {city.cityname}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography>{hotel.address}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography>{hotel.hotelname}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        {/* Render hotel images here */}
                        {hotel.hotelImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={hotel.hotelname}
                            style={{ width: "50px", height: "50px" }}
                          />
                        ))}
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography>{hotel.nightpackage}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography>{hotel.price}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography>{hotel.departure}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{ border: "3px solid white", textAlign: "center" }}
                      >
                        <Typography>{hotel.arrival}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "3px solid white",
                          display: "flex",
                          justifyContent: "center",
                          height: "100px",
                        }}
                      >
                        <Button
                          onClick={() => deleteHotel(city._id, hotel._id)}
                          sx={{
                            backgroundColor: "red",
                            color: "white",
                            ":hover": {
                              backgroundColor: "darkred",
                            },
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Box>
    
  );
};

export default CityUploadPage;


