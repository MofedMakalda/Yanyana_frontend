

// import { useEffect, useState } from "react";

// interface Hotel {
//   hotelname: string;
//   nightpackage: string;
//   price: string;
//   address: string;
//   hotelImages: string[]; // Store image names as strings
// }

// interface CityData {
//   cityname: string;
//   cityImage: string[];
//   discription: string;
//   hotels: Hotel[];
// }

// export const CityManagement = () => {
//   const [cityname, setCityname] = useState("");
//   const [cityImage, setCityImage] = useState<File[]>([]);
//   const [discription, setDiscription] = useState("");
//   const [hotelname, setHotelname] = useState("");
//   const [nightpackage, setNightpackage] = useState("");
//   const [price, setPrice] = useState("");
//   const [address, setAddress] = useState("");
//   const [hotelImages, setHotelImages] = useState<File[]>([]);
//   const [hotels, setHotels] = useState<Hotel[]>([]);
//   const [cities, setCities] = useState<CityData[]>([]);

//   // Fetch cities
//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         const response = await fetch("http://localhost:3002/cities");

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setCities(data);
//       } catch (error) {
//         console.error("Failed to fetch cities:", error);
//         alert("Failed to fetch cities. Please try again later.");
//       }
//     };

//     fetchCities();
//   }, []);

//   const handleAddCity = async () => {
//     const cityData: CityData = {
//       cityname,
//       cityImage: cityImage.map((image: File) => image.name),
//       discription,
//       hotels: hotels.map((hotel) => ({
//         hotelname: hotel.hotelname,
//         nightpackage: hotel.nightpackage,
//         price: hotel.price,
//         address: hotel.address,
//         hotelImages: hotel.hotelImages,
//       })),
//     };

//     console.log("Sending data to server:", cityData);

//     const response = await fetch("http://localhost:3002/cities", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(cityData),
//     });

//     const responseData = await response.json();

//     if (response.ok) {
//       alert("City added successfully!");
//       setCities((prev) => [...prev, responseData]);
//       resetFields();
//     } else {
//       alert(`Failed to add city: ${responseData.message || "Unknown error"}`);
//     }
//   };

//   const resetFields = () => {
//     setCityname("");
//     setCityImage([]);
//     setDiscription("");
//     setHotels([]);
//     setHotelname("");
//     setNightpackage("");
//     setPrice("");
//     setAddress("");
//     setHotelImages([]);
//   };

//   const handleDeleteCity = async (cityToDelete: string) => {
//     const response = await fetch(
//       `http://localhost:3002/cities/${cityToDelete}`,
//       {
//         method: "DELETE",
//       }
//     );

//     if (response.ok) {
//       alert("City deleted successfully!");
//       setCities((prev) =>
//         prev.filter((city) => city.cityname !== cityToDelete)
//       );
//     } else {
//       alert("Failed to delete city");
//     }
//   };

//   const handleAddHotel = () => {
//     if (hotelname && nightpackage && price && address) {
//       const newHotel: Hotel = {
//         hotelname,
//         nightpackage,
//         price,
//         address,
//         hotelImages: hotelImages.map((img) => img.name), // Correctly typed here
//       };
//       setHotels([...hotels, newHotel]);
//       // Reset hotel fields
//       setHotelname("");
//       setNightpackage("");
//       setPrice("");
//       setAddress("");
//       setHotelImages([]);
//     } else {
//       alert("Please fill in all hotel details");
//     }
//   };

//   return (
//     <div>
//       <h2>Manage Cities</h2>
//       <table
//         style={{
//           width: "80%",
//           margin: "0 auto",
//           borderCollapse: "collapse",
//           textAlign: "center",
//           border: "1px solid #ddd",
//         }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#f2f2f2" }}>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               City Name
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               Image URLs
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               Description
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Hotels</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//               <input
//                 type="text"
//                 placeholder="City Name"
//                 value={cityname}
//                 onChange={(e) => setCityname(e.target.value)}
//               />
//             </td>
//             <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//               <input
//                 style={{ border: "1px solid" }}
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setCityImage(Array.from(e.target.files || []))}
//                 multiple
//               />
//             </td>
//             <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//               <textarea
//                 placeholder="Description"
//                 value={discription}
//                 onChange={(e) => setDiscription(e.target.value)}
//               />
//             </td>
//             <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//               <h4>Add Hotel</h4>
//               <input
//                 type="text"
//                 placeholder="Hotel Name"
//                 value={hotelname}
//                 onChange={(e) => setHotelname(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Night Package"
//                 value={nightpackage}
//                 onChange={(e) => setNightpackage(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//               <input
//                 style={{ border: "1px solid" }}
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setHotelImages(Array.from(e.target.files || []))
//                 }
//                 multiple
//               />
//               <button onClick={handleAddHotel} style={{ marginTop: "8px" }}>
//                 Add Hotel
//               </button>
//               <div>
//                 <strong>Added Hotels:</strong>
//                 {hotels.length > 0 ? (
//                   <ul>
//                     {hotels.map((hotel, index) => (
//                       <li key={index}>
//                         {hotel.hotelname} ({hotel.nightpackage}, {hotel.price},{" "}
//                         {hotel.address})
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>No hotels added yet.</p>
//                 )}
//               </div>
//             </td>
//             <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//               <button
//                 onClick={handleAddCity}
//                 style={{
//                   padding: "6px 12px",
//                   backgroundColor: "#4CAF50",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Add City
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <h3>Existing Cities</h3>
//       <table
//         style={{
//           width: "80%",
//           margin: "0 auto",
//           borderCollapse: "collapse",
//           textAlign: "center",
//           border: "1px solid #ddd",
//         }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#f2f2f2" }}>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               City Name
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Images</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               Description
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Hotels</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cities.map((city: CityData) => (
//             <tr key={city.cityname}>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {city.cityname}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {city.cityImage.join(", ")}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {city.discription}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {Array.isArray(city.hotels) && city.hotels.length > 0 ? (
//                   city.hotels.map((hotel: Hotel) => (
//                     <div key={hotel.hotelname}>
//                       <strong>{hotel.hotelname}</strong> ({hotel.nightpackage},{" "}
//                       {hotel.price}, {hotel.address})<br />
//                       <strong>Images:</strong> {hotel.hotelImages.join(", ")}
//                     </div>
//                   ))
//                 ) : (
//                   <p>No hotels available</p>
//                 )}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 <button
//                   onClick={() => handleDeleteCity(city.cityname)}
//                   style={{
//                     padding: "6px 12px",
//                     backgroundColor: "#f44336",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


import { useEffect, useState } from "react";

interface Hotel {
  hotelname: string;
  nightpackage: string;
  price: string;
  address: string;
  hotelImages: string[]; // Store image names as strings
}

interface CityData {
  cityname: string;
  cityImage: string[];
  discription: string;
  hotels: Hotel[];
}

export const CityManagement = () => {
  const [cityname, setCityname] = useState("");
  const [cityImage, setCityImage] = useState<File[]>([]);
  const [discription, setDiscription] = useState("");
  const [hotelname, setHotelname] = useState("");
  const [nightpackage, setNightpackage] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [hotelImages, setHotelImages] = useState<File[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [cities, setCities] = useState<CityData[]>([]);

  // Fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://yanyana-c668fa5fd9ac.herokuapp.com/cities");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
        alert("Failed to fetch cities. Please try again later.");
      }
    };

    fetchCities();
  }, []);

  const handleAddCity = async () => {
    const cityData: CityData = {
      cityname,
      cityImage: cityImage.map((image: File) => image.name),
      discription,
      hotels: hotels.map((hotel) => ({
        hotelname: hotel.hotelname,
        nightpackage: hotel.nightpackage,
        price: hotel.price,
        address: hotel.address,
        hotelImages: hotel.hotelImages,
      })),
    };

    console.log("Sending data to server:", cityData);

    const response = await fetch("https://yanyana-c668fa5fd9ac.herokuapp.com/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cityData),
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("City added successfully!");
      setCities((prev) => [...prev, responseData]);
      resetFields();
    } else {
      alert(`Failed to add city: ${responseData.message || "Unknown error"}`);
    }
  };

  const resetFields = () => {
    setCityname("");
    setCityImage([]);
    setDiscription("");
    setHotels([]);
    setHotelname("");
    setNightpackage("");
    setPrice("");
    setAddress("");
    setHotelImages([]);
  };

  const handleDeleteCity = async (cityToDelete: string) => {
    const response = await fetch(
      `https://yanyana-c668fa5fd9ac.herokuapp.com/cities/${cityToDelete}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("City deleted successfully!");
      setCities((prev) =>
        prev.filter((city) => city.cityname !== cityToDelete)
      );
    } else {
      alert("Failed to delete city");
    }
  };

  const handleAddHotel = () => {
    if (hotelname && nightpackage && price && address) {
      const newHotel: Hotel = {
        hotelname,
        nightpackage,
        price,
        address,
        hotelImages: hotelImages.map((img) => img.name), // Correctly typed here
      };
      setHotels([...hotels, newHotel]);
      // Reset hotel fields
      setHotelname("");
      setNightpackage("");
      setPrice("");
      setAddress("");
      setHotelImages([]);
    } else {
      alert("Please fill in all hotel details");
    }
  };

  return (
    <div>
      <h2>Manage Cities</h2>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          borderCollapse: "collapse",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              City Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Image URLs
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Description
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Hotels</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <input
                type="text"
                placeholder="City Name"
                value={cityname}
                onChange={(e) => setCityname(e.target.value)}
                autoComplete="off"
              />
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <input
                style={{ border: "1px solid" }}
                type="file"
                accept="image/*"
                onChange={(e) => setCityImage(Array.from(e.target.files || []))}
                multiple
                autoComplete="off"

              />
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <textarea
                placeholder="Description"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                autoComplete="off"

              />
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <h4>Add Hotel</h4>
              <input
                type="text"
                placeholder="Hotel Name"
                value={hotelname}
                onChange={(e) => setHotelname(e.target.value)}
                autoComplete="off"

              />
              <input
                type="text"
                placeholder="Night Package"
                value={nightpackage}
                onChange={(e) => setNightpackage(e.target.value)}
                autoComplete="off"

              />
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoComplete="off"

              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="off"

              />
              <input
                style={{ border: "1px solid" }}
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setHotelImages(Array.from(e.target.files || []))
                }
                multiple
                autoComplete="off"

              />
              <button onClick={handleAddHotel} style={{ marginTop: "8px" }}>
                Add Hotel
              </button>
              <div>
                <strong>Added Hotels:</strong>
                {hotels.length > 0 ? (
                  <ul>
                    {hotels.map((hotel, index) => (
                      <li key={index}>
                        {hotel.hotelname} ({hotel.nightpackage}, {hotel.price},{" "}
                        {hotel.address})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hotels added yet.</p>
                )}
              </div>
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <button
                onClick={handleAddCity}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add City
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Existing Cities</h3>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          borderCollapse: "collapse",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              City Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Images</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Description
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Hotels</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city: CityData) => (
            <tr key={city.cityname}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {city.cityname}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {city.cityImage.join(", ")}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {city.discription}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {Array.isArray(city.hotels) && city.hotels.length > 0 ? (
                  city.hotels.map((hotel: Hotel) => (
                    <div key={hotel.hotelname}>
                      <strong>{hotel.hotelname}</strong> ({hotel.nightpackage},{" "}
                      {hotel.price}, {hotel.address})<br />
                      <strong>Images:</strong> {hotel.hotelImages.join(", ")}
                    </div>
                  ))
                ) : (
                  <p>No hotels available</p>
                )}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => handleDeleteCity(city.cityname)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
