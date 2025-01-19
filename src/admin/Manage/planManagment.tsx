// import  { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
  
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

// interface IPlan {
//   _id: string; // Assuming you have a unique ID for each plan
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
//   countryCode: string;
//   phoneNumber: string;
// }

// export const PlanManagement = () => {
//   const [plans, setPlans] = useState<IPlan[]>([]);

//   // Fetch plans from the API
//   const fetchPlans = async () => {
//     const response = await fetch("http://localhost:3002/plan");
//     const data = await response.json();
//     setPlans(data);
//   };

//   // Delete a plan by ID
//   const deletePlan = async (id: string) => {
//     const response = await fetch(`http://localhost:3002/plan/${id}`, {
//       method: "DELETE",
//     });
//     if (response.ok) {
//       setPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== id));
//     }
//   };

//   useEffect(() => {
//     fetchPlans();
//   }, []);

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         padding: 2,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <h1 style={{color:"white"}}>Manage Plan Your Vacation</h1>
//       <TableContainer sx={{ border: "2px solid black", margin: "20px 0" }}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ border: "2px solid white" }}>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Name
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Email
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 City
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Hotel
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Adults
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Childs
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Infants
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Check in
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Check out
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Country Code
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Phone Number
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Leave us a message
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "2px solid white",
//                   padding: "8px",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "17px",
//                   color: "red",
//                 }}
//               >
//                 Actions
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {plans.map((plan) => (
//               <TableRow key={plan._id}>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     width: "60px",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.fullName}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.email}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.city}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.hotel}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     textAlign: "center",
//                     color: "white",
//                   }}
//                 >
//                   {plan.adults}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     textAlign: "center",
//                     color: "white",
//                   }}
//                 >
//                   {plan.childs}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     textAlign: "center",
//                     color: "white",
//                   }}
//                 >
//                   {plan.infants}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.startDate}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.endDate}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     textAlign: "center",
//                     color: "white",
//                   }}
//                 >
//                   {plan.countryCode}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     textAlign: "center",
//                     color: "white",
//                   }}
//                 >
//                   {plan.phoneNumber}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   {plan.feedback}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     border: "2px solid white",
//                     padding: "8px",
//                     color: "white",
//                   }}
//                 >
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => deletePlan(plan._id)}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box flexGrow={1} />
//     </Box>
//   );
// };
import  { useEffect, useState } from "react";
import {
  Box,
  Button,
  
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface IPlan {
  _id: string; // Assuming you have a unique ID for each plan
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
  countryCode: string;
  phoneNumber: string;
}

export const PlanManagement = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  // Fetch plans from the API
  const fetchPlans = async () => {
    const response = await fetch("https://yanyana-c668fa5fd9ac.herokuapp.com/plan");
    const data = await response.json();
    setPlans(data);
  };

  // Delete a plan by ID
  const deletePlan = async (id: string) => {
    const response = await fetch(`https://yanyana-c668fa5fd9ac.herokuapp.com/plan/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== id));
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{color:"white"}}>Manage Plan Your Vacation</h1>
      <TableContainer sx={{ border: "2px solid black", margin: "20px 0" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ border: "2px solid white" }}>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                City
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Hotel
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Adults
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Childs
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Infants
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Check in
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Check out
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Country Code
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Phone Number
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Leave us a message
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "red",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan._id}>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    width: "60px",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.fullName}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.email}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.city}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.hotel}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {plan.adults}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {plan.childs}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {plan.infants}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.startDate}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.endDate}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {plan.countryCode}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {plan.phoneNumber}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  {plan.feedback}
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid white",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deletePlan(plan._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box flexGrow={1} />
    </Box>
  );
};
