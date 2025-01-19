// import { FC, PropsWithChildren, useState } from "react";
// import { AuthContext } from "./AuthContext";

// const USERNAME_KEY = 'username'
// const TOKEN_KEY = 'token'


// const AuthProvider: FC <PropsWithChildren> = ({children}) =>{

//         const[ username, setUsername] = useState<string | null>(localStorage.getItem(USERNAME_KEY))
//         const[ token, setToken] = useState<string | null>(localStorage.getItem(TOKEN_KEY))

     
//         const isAuthenticated = !!token;

//         const login = (username:string, token: string)=>{
//            setUsername(username);
//            setToken(token) 
//            localStorage.setItem(USERNAME_KEY, username);
//            localStorage.setItem(TOKEN_KEY, token)
//         }

//         const logout =()=>{
//             localStorage.removeItem(USERNAME_KEY)
//             localStorage.removeItem(TOKEN_KEY)
//             setUsername(null)
//             setToken(null)
//         }

//         return(
//             <AuthContext.Provider value={{username, token, isAuthenticated,login, logout}}>
//                 {children}
//             </AuthContext.Provider>
//         )

// }

// export default AuthProvider

// import { FC, PropsWithChildren, useState, useEffect } from "react";
// import { AuthContext } from "./AuthContext";
// import { jwtDecode } from "jwt-decode";

// const USERNAME_KEY = 'username';
// const TOKEN_KEY = 'token';

// const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [username, setUsername] = useState<string | null>(localStorage.getItem(USERNAME_KEY));
//   const [token, setToken] = useState<string | null>(localStorage.getItem(TOKEN_KEY));
//   const [firstname, setFirstname] = useState<string | null>(null);
//   const [lastname, setLastname] = useState<string | null>(null);

//   // Update firstname and lastname when the token changes
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedToken: any = jwtDecode(token); // Decode the JWT token
//         setFirstname(decodedToken.firstname); // Assuming 'firstname' is in the payload
//         setLastname(decodedToken.lastname); // Assuming 'lastname' is in the payload
//       } catch (error) {
//         console.error("Error decoding token", error);
//       }
//     }
//   }, [token]);

//   const isAuthenticated = !!token;

//   const login = (username: string, token: string) => {
//     setUsername(username);
//     setToken(token);
//     localStorage.setItem(USERNAME_KEY, username);
//     localStorage.setItem(TOKEN_KEY, token);
//   };

//   const logout = () => {
//     localStorage.removeItem(USERNAME_KEY);
//     localStorage.removeItem(TOKEN_KEY);
//     setUsername(null);
//     setToken(null);
//     setFirstname(null);
//     setLastname(null);
//   };

//   return (
//     <AuthContext.Provider value={{ username, token, firstname, lastname, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import { FC, PropsWithChildren, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

const USERNAME_KEY = 'username';
const TOKEN_KEY = 'token';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(localStorage.getItem(USERNAME_KEY));
  const [token, setToken] = useState<string | null>(localStorage.getItem(TOKEN_KEY));
  const [firstname, setFirstname] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);

  // Update firstname and lastname when the token changes
  useEffect(() => {
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token); // Decode the JWT token
        console.log("Decoded token:", decodedToken); // Debug log
        setFirstname(decodedToken.firstname); // Assuming 'firstname' is in the payload
        setLastname(decodedToken.lastname); // Assuming 'lastname' is in the payload
      } catch (error) {
        console.error("Error decoding token", error);
      }
    }
  }, [token]);

  const isAuthenticated = !!token;

  const login = (username: string, token: string) => {
    setUsername(username);
    setToken(token);
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const logout = () => {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TOKEN_KEY);
    setUsername(null);
    setToken(null);
    setFirstname(null);
    setLastname(null);
    console.log("Logged out."); // Debug log
  };

  return (
    <AuthContext.Provider value={{ username, token, firstname, lastname, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
