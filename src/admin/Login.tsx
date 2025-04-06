// import {
//   Box,
//   Button,
//   Typography,
// } from "@mui/material";
// // import LogoGold from "../assets/goldLine.png";
// // import logo from "../assets/RapidaLogo.png";
// import { useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import { BASE_URL } from "../constants/baseUrl";
// import { useAuth } from "../context/Auth/AuthContext";
// import TextFieldWithFocusShadow from "./components/TextFieldWithShadow";
// import background from "../assets/blue.png";

// const Login = () => {
//   const [error, setError] = useState("");
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const { login } = useAuth();

//   const onSubmit = async () => {
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;

//     if (!email || !password) {
//       setError("Check Submitted Data!");
//       return;
//     }

//     const response = await fetch(`${BASE_URL}/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     if (!response.ok) {
//       setError("Error, Check Your Credentials Again!");
//       return;
//     }
//     const token = await response.json();

//     if (!token) {
//       setError("Incorrect Token");
//       return;
//     }
//     login(email, token);
//     navigate("/admin/dashboard");

//     console.log(token);
//   };

//   const navigate = useNavigate();
//   return (
//     <Box>
//       <Box
//         sx={{
//           height: "90px",
//           backgroundColor: "black",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <IconButton onClick={() => navigate("/HomeScreen")}>
//           <ArrowBackIcon sx={{ fontSize: "35px", color: "black" }} />
//         </IconButton> */}
//         <Typography
//           sx={{ fontSize: "40px", fontFamily: "monospace", color: "white" }}
//         >
//         Welcome To Admin Panel </Typography>
//         <Box />
//       </Box>

//       <Box
//         sx={{
//           backgroundImage: `url(${background})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition:"center",
//           height: "100vh",
//           color: "black",
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
//             border: "4px solidrgb(0, 0, 0)",
//             marginBottom: "0",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "space-between",
//             borderRadius: "10px",
//             boxShadow:
//               "5px -5px 30px rgba(226, 226, 226, 0.5), -5px -5px 30px rgba(179, 179, 179, 0.5), 0 -5px 30px rgba(210, 210, 210, 0.5)",
//           }}
//         >
//           <Box>
//             <Typography
//               sx={{
//                 fontFamily: "initial",
//                 fontSize: "30px",
//                 textAlign: "center",
//                 marginTop: "20px",
//               }}
//             >
//               Please Enter Your Credentials{" "}
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
//               placeholder={"Enter Your Email..."}
//               type={"string"}
//               ref={emailRef}
//               name="email"
//             />
//             <TextFieldWithFocusShadow
//               placeholder={"Enter Your Password..."}
//               type={"password"}
//               ref={passwordRef}
//               name="password"
//             />
//             <Button
//               sx={{ color: "white", width: "100%", backgroundColor: "blue" }}
//               onClick={onSubmit}
//             >
//               Login
//             </Button>{" "}
//             {error && (
//               <Typography
//                 sx={{
//                   color: "red",
//                   fontWeight: "bold",
//                   fontFamily: "monospace",
//                 }}
//               >
//                 {error}
//               </Typography>
//             )}
//             {/* <Typography>
//               Not registered?{" "}
//               <Typography component="span">
//                 <a
//                   href="/register"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   Register
//                 </a>
//               </Typography>
//             </Typography>{" "} */}
//           </Box>
//           <Box></Box>
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
//           {/* <img style={{ width: "80%" }} src={LogoGold} /> */}
//           {/* <img
//             style={{
//               position: "absolute",
//               top: "-45px",
//               width: isMobile ? "160px" : "200px",
//               // width:"200px",
//             }}
//             src={logo}
//           /> */}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Login;

import { Box, Button, Typography } from "@mui/material";
// import LogoGold from "../assets/goldLine.png";
// import logo from "../assets/RapidaLogo.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../context/Auth/AuthContext";
import TextFieldWithFocusShadow from "./components/TextFieldWithShadow";
import background from "../assets/blue.png";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login } = useAuth();

  const onSubmit = async () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/user/login`;

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("Check Submitted Data!");
      return;
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      setError("Error, Check Your Credentials Again!");
      return;
    }
    const token = await response.json();

    if (!token) {
      setError("Incorrect Token");
      return;
    }
    login(email, token);
    navigate("/admin/dashboard");

    console.log(token);
  };

  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          height: "90px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <IconButton onClick={() => navigate("/HomeScreen")}>
          <ArrowBackIcon sx={{ fontSize: "35px", color: "black" }} />
        </IconButton> */}
        <Typography
          sx={{ fontSize: "40px", fontFamily: "monospace", color: "white" }}
        >
          Welcome To Admin Panel{" "}
        </Typography>
        <Box />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          color: "black",
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
              md: "50%",
            },
            width: {
              xs: "70%",
              md: "50%",
            },
            border: "4px solidrgb(0, 0, 0)",
            marginBottom: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "10px",
            boxShadow:
              "5px -5px 30px rgba(226, 226, 226, 0.5), -5px -5px 30px rgba(179, 179, 179, 0.5), 0 -5px 30px rgba(210, 210, 210, 0.5)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "initial",
                fontSize: "30px",
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
              placeholder={"Enter Your Email..."}
              type={"string"}
              ref={emailRef}
              name="email"
            />
            <TextFieldWithFocusShadow
              placeholder={"Enter Your Password..."}
              type={"password"}
              ref={passwordRef}
              name="password"
            />
            <Button
              sx={{ color: "white", width: "100%", backgroundColor: "blue" }}
              onClick={onSubmit}
            >
              Login
            </Button>{" "}
            {error && (
              <Typography
                sx={{
                  color: "red",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                {error}
              </Typography>
            )}
            {/* <Typography>
              Not registered?{" "}
              <Typography component="span">
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </a>
              </Typography>
            </Typography>{" "} */}
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
          {/* <img style={{ width: "80%" }} src={LogoGold} /> */}
          {/* <img
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

export default Login;
