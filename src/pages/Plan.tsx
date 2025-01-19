// import {
//   Box,
//   Select,
//   Stack,
//   TextField,
//   MenuItem,
//   FormControl,
//   Button,
// } from "@mui/material";
// import PlanVacation from "../assets/plan.png";
// import { countries } from "../components/countryCodes";
// import { ChangeEvent, useState } from "react";
// import { TextFieldComponent } from "../components/textField";

// // Define the shape of formData
// interface FormData {
//   fullName: string;
//   email: string;
//   city: string;
//   hotel: string;
//   feedback: string;
//   adults: string;
//   childs: string;
//   infants: string;
//   startDate: string;
//   endDate: string;
//   phoneNumber: string;
//   countryCode: string; // Add countryCode to the form data structure
// }

// const initialData: FormData = {
//   fullName: "",
//   email: "",
//   city: "",
//   hotel: "",
//   feedback: "",
//   adults: "",
//   childs: "",
//   infants: "",
//   startDate: "",
//   endDate: "",
//   phoneNumber: "",
//   countryCode: "", // Initialize countryCode
// };

// export const Plan = () => {
//   const [formData, setFormData] = useState<FormData>(initialData);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCountryChange = (selectedValue: string) => {
//     setFormData({ ...formData, countryCode: selectedValue }); // Update the formData with the selected country code
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://localhost:3002/plan", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // Send the form data
//       });

//       if (!response.ok) {
//         // Show an alert for HTTP errors
//         alert(`HTTP error! status: ${response.status}`);
//         return; // Exit the function after showing the alert
//       }

//       // Show an alert for a successful response
//       alert("Submitted Successfully ");

//       // Reset form data after successful submission
//       setFormData(initialData);
//     } catch (error) {
//       // Show an alert if there is a catch error
//       alert("Error submitting form: "); // Handle error response with an alert
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         backgroundColor: "white",
//         backgroundImage: `url(${PlanVacation})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Box
//         sx={{
//           width: "70%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           alignItems: "center",
//           padding: 2,
//         }}
//       >
//         <h1 style={{ color: "white", marginBottom: 20, marginTop: 4 }}>
//           Plan Your Vacation
//         </h1>

//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: 20,
//             width: "90%",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//               width: "50%",
//             }}
//           >
//             <TextFieldComponent
//               value={formData.fullName}
//               onChange={handleChange}
//               name="fullName"
//               type="text"
//               placeHolder="Enter Your name"
//             />
//             <TextFieldComponent
//               value={formData.email}
//               onChange={handleChange}
//               name="email"
//               type="text"
//               placeHolder="Enter Your Email"
//             />
//             <TextFieldComponent
//               value={formData.city}
//               onChange={handleChange}
//               name="city"
//               type="text"
//               placeHolder="Ex: Antalya"
//             />
//           </Box>
//           <Box
//             sx={{
//               flex: 1,
//               height: "100%",
//               width: "50%",
//               display: "flex",
//             }}
//           >
//             <TextField
//               sx={{
//                 flex: 1,
//                 height: "100%",
//                 width: "100%",
                
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: "8px",
//                   backgroundColor: "white",
//                   color: "black",
//                   fontSize: {
//                     xs: "10px",
//                     md: "20px",
//                   },
//                   "& fieldset": {
//                     borderWidth: "4px",
//                   },
//                   "&:hover": {
//                     borderColor: "black",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "black",
//                     borderWidth: "4px",
//                   },
//                 },
//               }}
//               onChange={handleChange}
//               name="feedback"
//               value={formData.feedback}
//               multiline
//               rows={4}
//               type="text"
//               placeholder="Leave us a Message..."
//               required
//               InputProps={{
//                 style: {
//                   color: "black",
//                   backgroundColor: "white",
//                   border: "1px solid black",
//                   outline: "none",
//                   height: "100%",
//                 },
//               }}
//             />
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             marginTop: 1,
//             gap: 1,
//             width: "90%",
//           }}
//         >
//           <TextFieldComponent
//             value={formData.hotel}
//             name="hotel"
//             type="text"
//             placeHolder="Ex: CVK Taksim"
//             onChange={handleChange}
//           />

//           <Stack direction="row" spacing={3} justifyContent="space-between">
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <h6 style={{ color: "white" }}>Adults</h6>
//               <TextFieldComponent
//                 value={formData.adults}
//                 name="adults"
//                 type="text"
//                 placeHolder="Adults (12+)"
//                 onChange={handleChange}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <h6 style={{ color: "white" }}>Childs</h6>
//               <TextFieldComponent
//                 value={formData.childs}
//                 name="childs"
//                 type="text"
//                 placeHolder="Childs (2-12)"
//                 onChange={handleChange}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <h6 style={{ color: "white" }}>Infants</h6>
//               <TextFieldComponent
//                 value={formData.infants}
//                 name="infants"
//                 type="text"
//                 placeHolder="Infants (0-2)"
//                 onChange={handleChange}
//               />
//             </Box>
//           </Stack>

//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <h6 style={{ color: "white" }}>Check in</h6>
//             <TextFieldComponent
//               value={formData.startDate}
//               onChange={handleChange}
//               name="startDate"
//               type="date"
//             />
//           </Box>
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <h6 style={{ color: "white" }}>Check out</h6>
//             <TextFieldComponent
//               value={formData.endDate}
//               onChange={handleChange}
//               name="endDate"
//               type="date"
//             />
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               alignItems: "center",
//               gap: 2,
//             }}
//           >
//             <FormControl
//               fullWidth
//               sx={{
//                 width: "40%",
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "white",
//                   border: "4px solid lightgrey",
//                   borderRadius: "10px",
//                   fieldset: { borderColor: "none" },
//                   ":hover": { borderColor: "black" },
//                   "&.Mui-focused fieldset": {
//                     border: "none",
//                   },
//                 },
//               }}
//             >
//               <Select
//                 sx={{fontSize: {
//                   xs: "10px",
//                   md: "20px",
//                 },}}
//                 value={formData.countryCode}
//                 onChange={(event) => handleCountryChange(event.target.value)}
//                 displayEmpty
//                 renderValue={(selected) => {
//                   if (!selected) {
//                     return <em style={{ color: "black" }}>Code</em>;
//                   }
//                   return selected;
//                 }}
//                 MenuProps={{
//                   PaperProps: {
//                     style: {
//                       backgroundColor: "white",
//                       color: "black",
//                     },
//                   },
//                 }}
//               >
//                 <MenuItem disabled value="">
//                   <em style={{ color: "black" }}>Select Code</em>
//                 </MenuItem>
//                 {countries.map((country) => (
//                   <MenuItem
//                     key={country.code}
//                     value={country.dial_code}
//                     style={{ color: "black" }}
//                   >
//                     {country.name} {country.dial_code}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <TextField
//               sx={{
//                 flexGrow: 1,
//                 "& .MuiOutlinedInput-root": {
//                   color: "black",
//                   borderRadius: "8px",
//                   backgroundColor: "white",
//                   fontSize: {
//                     xs: "10px",
//                     md: "20px",
//                   },
//                   "& fieldset": {
//                     borderWidth: "4px",
//                   },
//                   "&:hover": {
//                     borderColor: "black",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "black",
//                     borderWidth: "4px",
//                   },
//                 },
//               }}
//               onChange={handleChange}
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               type="tel"
//               placeholder="Phone Number"
//               required
//               InputProps={{
//                 style: {
//                   color: "black",
//                   backgroundColor: "white",
//                   border: "1px solid black",
//                   outline: "none",
//                 },
//               }}
//             />
//           </Box>

//           <Button
//             onClick={handleSubmit}
//             variant="contained"
//             sx={{
//               mt: 2,
              
//                 fontSize: {
//                   xs: "10px",
//                   md: "20px",
//                 },
              
//               backgroundColor: "black",
//               "&:hover": {
//                 backgroundColor: "grey",
//               },
//             }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Plan;
import {
  Box,
  Select,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import PlanVacation from "../assets/plan.png";
import { countries } from "../components/countryCodes";
import { ChangeEvent, useState } from "react";
import { TextFieldComponent } from "../components/textField";

// Define the shape of formData
interface FormData {
  fullName: string;
  email: string;
  city: string;
  hotel: string;
  feedback: string;
  adults: string;
  childs: string;
  infants: string;
  startDate: string;
  endDate: string;
  phoneNumber: string;
  countryCode: string; // Add countryCode to the form data structure
}

const initialData: FormData = {
  fullName: "",
  email: "",
  city: "",
  hotel: "",
  feedback: "",
  adults: "",
  childs: "",
  infants: "",
  startDate: "",
  endDate: "",
  phoneNumber: "",
  countryCode: "", // Initialize countryCode
};

export const Plan = () => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedValue: string) => {
    setFormData({ ...formData, countryCode: selectedValue }); // Update the formData with the selected country code
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/plans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data
      });

      if (!response.ok) {
        // Show an alert for HTTP errors
        alert(`HTTP error! status: ${response.status}`);
        return; // Exit the function after showing the alert
      }

      // Show an alert for a successful response
      alert("Submitted Successfully ");

      // Reset form data after successful submission
      setFormData(initialData);
    } catch (error) {
      // Show an alert if there is a catch error
      alert("Error submitting form: "); // Handle error response with an alert
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
        backgroundImage: `url(${PlanVacation})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 2,
        }}
      >
        <h1 style={{ color: "white", marginBottom: 20, marginTop: 4 }}>
          Plan Your Vacation
        </h1>

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            width: "90%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "50%",
            }}
          >
            <TextFieldComponent
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
              type="text"
              placeHolder="Enter Your name"
            />
            <TextFieldComponent
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="text"
              placeHolder="Enter Your Email"
            />
            <TextFieldComponent
              value={formData.city}
              onChange={handleChange}
              name="city"
              type="text"
              placeHolder="Ex: Antalya"
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              height: "100%",
              width: "50%",
              display: "flex",
            }}
          >
            <TextField
              sx={{
                flex: 1,
                height: "100%",
                width: "100%",
                
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: {
                    xs: "10px",
                    md: "20px",
                  },
                  "& fieldset": {
                    borderWidth: "4px",
                  },
                  "&:hover": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    borderWidth: "4px",
                  },
                },
              }}
              onChange={handleChange}
              name="feedback"
              value={formData.feedback}
              multiline
              rows={4}
              type="text"
              placeholder="Leave us a Message..."
              required
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                  outline: "none",
                  height: "100%",
                },
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 1,
            gap: 1,
            width: "90%",
          }}
        >
          <TextFieldComponent
            value={formData.hotel}
            name="hotel"
            type="text"
            placeHolder="Ex: CVK Taksim"
            onChange={handleChange}
          />

          <Stack direction="row" spacing={3} justifyContent="space-between">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h6 style={{ color: "white" }}>Adults</h6>
              <TextFieldComponent
                value={formData.adults}
                name="adults"
                type="text"
                placeHolder="Adults (12+)"
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h6 style={{ color: "white" }}>Childs</h6>
              <TextFieldComponent
                value={formData.childs}
                name="childs"
                type="text"
                placeHolder="Childs (2-12)"
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h6 style={{ color: "white" }}>Infants</h6>
              <TextFieldComponent
                value={formData.infants}
                name="infants"
                type="text"
                placeHolder="Infants (0-2)"
                onChange={handleChange}
              />
            </Box>
          </Stack>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h6 style={{ color: "white" }}>Check in</h6>
            <TextFieldComponent
              value={formData.startDate}
              onChange={handleChange}
              name="startDate"
              type="date"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h6 style={{ color: "white" }}>Check out</h6>
            <TextFieldComponent
              value={formData.endDate}
              onChange={handleChange}
              name="endDate"
              type="date"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              gap: 2,
            }}
          >
            <FormControl
              fullWidth
              sx={{
                width: "40%",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  border: "4px solid lightgrey",
                  borderRadius: "10px",
                  fieldset: { borderColor: "none" },
                  ":hover": { borderColor: "black" },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            >
              <Select
                sx={{fontSize: {
                  xs: "10px",
                  md: "20px",
                },}}
                value={formData.countryCode}
                onChange={(event) => handleCountryChange(event.target.value)}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "black" }}>Code</em>;
                  }
                  return selected;
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "white",
                      color: "black",
                    },
                  },
                }}
              >
                <MenuItem disabled value="">
                  <em style={{ color: "black" }}>Select Code</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem
                    key={country.code}
                    value={country.dial_code}
                    style={{ color: "black" }}
                  >
                    {country.name} {country.dial_code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  color: "black",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  fontSize: {
                    xs: "10px",
                    md: "20px",
                  },
                  "& fieldset": {
                    borderWidth: "4px",
                  },
                  "&:hover": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    borderWidth: "4px",
                  },
                },
              }}
              onChange={handleChange}
              name="phoneNumber"
              value={formData.phoneNumber}
              type="tel"
              placeholder="Phone Number"
              required
              InputProps={{
                style: {
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                  outline: "none",
                },
              }}
            />
          </Box>

          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              mt: 2,
              
                fontSize: {
                  xs: "10px",
                  md: "20px",
                },
              
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "grey",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Plan;
