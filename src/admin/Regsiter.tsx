import {
  Box,
  Button,
  IconButton,
  Typography,

} from "@mui/material";
// import LogoGold from "../assets/goldLine.png";
// import logo from "../assets/RapidaLogo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import TextFieldWithFocusShadow from "./components/TextFieldWithShadow";
import { useAuth } from "../context/Auth/AuthContext";



const Register = () => {
  const [error , setError] = useState("")
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {login}= useAuth();

  const onSubmit =  async () => {
    const firstname = firstNameRef.current?.value;
    const lastname = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if(!firstname || !lastname || !email || !password){
      setError ('Check Submitted Data!')
      return ;
    }

    const response = await fetch (`${BASE_URL}/user/register`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        firstname,
        lastname,
        email,
        password
      }),
    });

    if(!response.ok){
      setError("Error, Check Your Credentials Again!")
      return ;
    }
    const token = await response.json();

    if(!token){
      setError("Incorrect Token")
      return;
    }
    login(email, token)
    navigate('/')

    console.log(token)
  };


  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          height: "70px",
          backgroundColor: "#c2992e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => navigate("/HomeScreen")}>
          <ArrowBackIcon sx={{ fontSize: "35px", color: "black" }} />
        </IconButton>
        <Typography sx={{ fontSize: "25px", fontFamily: "initial" }}>
          Register Page
        </Typography>
        <Box />
      </Box>

      <Box
        sx={{
          backgroundColor: "black",
          height: "100vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: {
              xs: "450px",
              md: "65%",
            },
            width: {
              xs: "70%",
              md: "50%",
            },
            border: "4px solid #c2992e",
            marginBottom: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "10px",
            boxShadow:
              "5px -5px 30px rgba(194, 153, 46, 0.5), -5px -5px 30px rgba(194, 153, 46, 0.5), 0 -5px 30px rgba(194, 153, 46, 0.5)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "initial",
                fontSize: "30px",
                color: "#c2992e",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Please Enter Your Credentials{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <TextFieldWithFocusShadow
              placeholder={"Enter Full Name..."}
              type={"string"}
              ref={firstNameRef} name="fullname"            />
            <TextFieldWithFocusShadow
              placeholder={"Enter Full Name..."}
              type={"string"}
              ref={lastNameRef} name="fullname"            />
            <TextFieldWithFocusShadow
              placeholder={"Enter Your Email..."}
              type={"string"}
              ref={emailRef} name="email"            />
            <TextFieldWithFocusShadow
              placeholder={"Enter Your Password..."}
              type={"password"}
              ref={passwordRef} name="password"            />
            <Button
              sx={{ color: "black", backgroundColor: "#c2992e", width: "100%" }}
              onClick={onSubmit}
            >
              Sign Up
            </Button>{" "}
            {error&& <Typography sx={{color:"red", fontWeight:"bold", fontFamily:"monospace"}}>{error}</Typography> }
            <Typography>
              Already registered?{" "}
              <Typography component="span">
                <a
                  href="/LoginScreen"
                  style={{ textDecoration: "none", color: "#c2992e" }}
                >
                  Login
                </a>
              </Typography>
            </Typography>{" "}
          </Box>
          <Box></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          {/* <img style={{ width: "80%" }} src={LogoGold} />
          <img
            style={{
              position: "absolute",
              top: "-45px",
              width: isMobile ? "160px" : "200px",
              // width:"200px",
            }}
            src={logo}
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
// import {
//   Box,
//   Button,
//   IconButton,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import LogoGold from "../assets/goldLine.png";
// import logo from "../assets/RapidaLogo.png";
// import TextFieldWithFocusShadow from "../Components/TextFieldWithShadow";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";

// const Register = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const onSubmit = () => {
//     const name = nameRef.current?.value;
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;

//     console.log(name, email, password);
//   };

//   const isMobile = useMediaQuery("(max-width:900px)");
//   const navigate = useNavigate();

//   return (
//     <Box>
//       <Box
//         sx={{
//           height: "70px",
//           backgroundColor: "#c2992e",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <IconButton onClick={() => navigate("/HomeScreen")}>
//           <ArrowBackIcon sx={{ fontSize: "35px", color: "black" }} />
//         </IconButton>
//         <Typography sx={{ fontSize: "25px", fontFamily: "initial" }}>
//           Register Page
//         </Typography>
//         <Box />
//       </Box>

//       <Box
//         sx={{
//           backgroundColor: "black",
//           height: "100vh",
//           color: "white",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             height: {
//               xs: "450px",
//               md: "50%",
//             },
//             width: {
//               xs: "70%",
//               md: "50%",
//             },
//             border: "4px solid #c2992e",
//             marginBottom: "0",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "space-between",
//             borderRadius: "10px",
//             boxShadow:
//               "5px -5px 30px rgba(194, 153, 46, 0.5), -5px -5px 30px rgba(194, 153, 46, 0.5), 0 -5px 30px rgba(194, 153, 46, 0.5)",
//           }}
//         >
//           <Box>
//             <Typography
//               sx={{
//                 fontFamily: "initial",
//                 fontSize: "30px",
//                 color: "#c2992e",
//                 textAlign: "center",
//                 marginTop: "20px",
//               }}
//             >
//               Please Enter Your Credentials
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//               gap: "15px",
//             }}
//           >
//             <TextFieldWithFocusShadow
//               placeholder="Enter Full Name..."
//               type="text"
//               ref={nameRef}
//               name="fullname"
//             />
//             <TextFieldWithFocusShadow
//               placeholder="Enter Your Email..."
//               type="email"
//               ref={emailRef}
//               name="email"
//             />
//             <TextFieldWithFocusShadow
//               placeholder="Enter Your Password..."
//               type="password"
//               ref={passwordRef}
//               name="password"
//             />
//             <Button
//               sx={{ color: "black", backgroundColor: "#c2992e", width: "100%" }}
//               onClick={onSubmit}
//             >
//               Sign Up
//             </Button>
//             <Typography>
//               Already registered?{" "}
//               <Typography component="span">
//                 <a
//                   href="/LoginScreen"
//                   style={{ textDecoration: "none", color: "#c2992e" }}
//                 >
//                   Login
//                 </a>
//               </Typography>
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative",
//             width: {
//               xs: "100%",
//               md: "50%",
//             },
//           }}
//         >
//           <img style={{ width: "80%" }} src={LogoGold} alt="Logo Gold" />
//           <img
//             style={{
//               position: "absolute",
//               top: "-45px",
//               width: isMobile ? "160px" : "200px",
//             }}
//             src={logo}
//             alt="Logo"
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Register;
