// // import { useState, useEffect } from 'react';
// // import { Button } from '@mui/material';

// // interface Bungalow {
// //     _id: string;
// //     location: string;
// //     capacity: string;
// //     bungalowImages: string[];
// // }

// // const AdminPage: React.FC = () => {
// //     const [location, setLocation] = useState('');
// //     const [capacity, setCapacity] = useState('');
// //     const [bungalowImages, setBungalowImages] = useState<File[]>([]);
// //     const [bungalows, setBungalows] = useState<Bungalow[]>([]);

// //     // Fetch bungalows when the component loads
// //     useEffect(() => {
// //         fetchBungalows();
// //     }, []);

// //     const fetchBungalows = async () => {
// //         try {
// //             const response = await fetch('http://localhost:3002/bungalows');
// //             const data = await response.json();
// //             console.log("Fetched Bungalows:", data);  // Debugging - Check fetched data
// //             if (Array.isArray(data)) {
// //                 setBungalows(data);  // Set directly since it's an array
// //             } else {
// //                 console.warn('Unexpected API response:', data);
// //             }
// //         } catch (error) {
// //             console.error('Error fetching bungalows:', error);
// //         }
// //     };

// //     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         if (e.target.files) {
// //             setBungalowImages(Array.from(e.target.files));
// //         }
// //     };

// //     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();

// //         const formData = new FormData();
// //         bungalowImages.forEach((image) => {
// //             formData.append('images', image);
// //         });
// //         formData.append('capacity', capacity);
// //         formData.append('location', location);

// //         try {
// //             const response = await fetch('http://localhost:3002/bungalows', {
// //                 method: 'POST',
// //                 body: formData,
// //             });

// //             const result = await response.json();
// //             if (response.ok) {
// //                 alert('Bungalow added successfully!');
// //                 setLocation('');
// //                 setCapacity('');
// //                 setBungalowImages([]);
// //                 fetchBungalows();
// //             } else {
// //                 alert(`Error: ${result.message}`);
// //             }
// //         } catch (error) {
// //             console.error('Error:', error);
// //         }
// //     };

// //     const handleDelete = async (bungalowId: string) => {
// //         if (!window.confirm('Are you sure you want to delete this bungalow?')) return;

// //         try {
// //             const response = await fetch(`http://localhost:3002/bungalows/${bungalowId}`, {
// //                 method: 'DELETE',
// //             });

// //             if (response.ok) {
// //                 alert('Bungalow deleted successfully!');
// //                 fetchBungalows();
// //             } else {
// //                 const result = await response.json();
// //                 alert(`Error: ${result.message}`);
// //             }
// //         } catch (error) {
// //             console.error('Error deleting bungalow:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Add New Bungalow</h1>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Location:</label>
// //                     <input
// //                         type="text"
// //                         value={location}
// //                         onChange={(e) => setLocation(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Capacity:</label>
// //                     <input
// //                         type="text"
// //                         value={capacity}
// //                         onChange={(e) => setCapacity(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Bungalow Images:</label>
// //                     <input
// //                         type="file"
// //                         multiple
// //                         onChange={handleImageChange}
// //                         accept="image/*"
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit">Add Bungalow</button>
// //             </form>

// //             <h2>Existing Bungalows</h2>
// //             {/* Check if bungalows state is valid and render list */}
// //             {bungalows.length > 0 ? (
// //                 <ul>
// //                     {bungalows.map((bungalow) => (
// //                         <li key={bungalow._id}>
// //                             <p>Location: {bungalow.location}</p>
// //                             <p>Capacity: {bungalow.capacity}</p>
// //                             <div>
// //                                 {bungalow.bungalowImages?.map((imgUrl, index) => (
// //                                     <img key={index} src={imgUrl} alt="Bungalow" width="100" />
// //                                 ))}
// //                             </div>
// //                             {/* MUI Delete Button */}
// //                             <Button
// //                                 variant="contained"
// //                                 color="secondary"
// //                                 onClick={() => handleDelete(bungalow._id)}
// //                             >
// //                                 Delete
// //                             </Button>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             ) : (
// //                 <p>No bungalows found</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default AdminPage;
// //---------------------------------------------------------------------------------------------------------------------------

import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import  { useEffect, useState, ChangeEvent } from "react";
import background from "../assets/background1.png";
import { TextFieldComponent } from "../components/textField";

const tableHead = ["Location", "Capacity", "Images", "Action"];

interface Bungalow {
  _id: string;
  location: string;
  capacity: string;
  bungalowImages: string[];
}

const AdminPage = () => {
  const [bungalows, setBungalows] = useState<Bungalow[]>([]);
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [bungalowImages, setBungalowImages] = useState<File[]>([]);

  // Fetch bungalows from server
  const fetchBungalows = async () => {
    try {
      const response = await fetch("http://localhost:3002/bungalows");
      if (response.ok) {
        const data = await response.json();
        setBungalows(data);
      } else {
        console.error("Failed to fetch bungalows.");
      }
    } catch (error) {
      console.error("Error fetching bungalows:", error);
    }
  };

  useEffect(() => {
    fetchBungalows();
  }, []);

  // Handle image input change for multiple files
  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBungalowImages(Array.from(e.target.files));
    }
  };

  // Add new bungalow
  const addBungalow = async () => {
    const formData = new FormData();
    formData.append("location", location);
    formData.append("capacity", capacity);
    bungalowImages.forEach((image) => formData.append("images", image));

    try {
      const response = await fetch("http://localhost:3002/bungalows", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Clear inputs on successful addition
        alert("Uploaded Succesfully");
        setLocation("");
        setCapacity("");
        setBungalowImages([]);
        fetchBungalows();
      } else {
        const errorData = await response.json();
        console.error("Failed to add bungalow:", errorData);
      }
    } catch (error) {
      console.error("Error adding bungalow:", error);
    }
  };

  // Delete bungalow by ID
  const deleteBungalow = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3002/bungalows/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("deleted Succesfully");
        fetchBungalows();
      } else {
        console.error("Failed to delete bungalow.");
      }
    } catch (error) {
      console.error("Error deleting bungalow:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px",
            paddingTop: "15px",
            color: "gold",
          }}
          variant="h4"
        >
          Manage Bungalows
        </Typography>

        {/* Table for adding a new bungalow */}
        <TableContainer>
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
              <TableRow sx={{ height: "100px" }}>
                <TableCell sx={{ border: "3px solid white", opacity: "0.5" }}>
                  <TextFieldComponent
                    placeHolder="Location"
                    type="text"
                    value={location}
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </TableCell>
                <TableCell sx={{ border: "3px solid white", opacity: "0.5" }}>
                  <TextFieldComponent
                    placeHolder="Capacity"
                    type="text"
                    name="capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </TableCell>
                <TableCell sx={{ border: "3px solid white" }}>
                  <TextFieldComponent
                    type="file"
                    name="file"
                    onChange={handleImagesChange}
                    multiple
                  />
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
                    sx={{
                      backgroundColor: "blue",
                      width: "150px",
                      height: "70px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "ButtonShadow",
                        color: "black",
                      },
                    }}
                    onClick={addBungalow}
                  >
                    Add Bungalow
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Table to display list of bungalows */}
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px",
            paddingTop: "15px",
            color: "gold",
          }}
          variant="h4"
        >
          Existing Bungalows
        </Typography>
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
              {bungalows.map((bungalow) => (
                <TableRow key={bungalow._id}>
                  <TableCell
                    sx={{ border: "3px solid white", textAlign: "center" }}
                  >
                    <Typography sx={{ color: "gold", fontSize: "20px" }}>
                      {" "}
                      {bungalow.location}{" "}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ border: "3px solid white", textAlign: "center" }}
                  >
                    <Typography sx={{ color: "gold", fontSize: "20px" }}>
                      {" "}
                      {bungalow.capacity}{" "}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ border: "3px solid white", textAlign: "center" }}
                  >
                    {bungalow.bungalowImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Bungalow"
                        style={{ width: "50px", height: "50px", margin: "5px" }}
                      />
                    ))}
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
                      onClick={() => deleteBungalow(bungalow._id)}
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
      </Container>
    </Box>
  );
};

export default AdminPage;
