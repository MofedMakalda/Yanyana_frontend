// import { Routes, Route, BrowserRouter, Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "./context/Auth/AuthContext"; // Ensure the correct import

// import { HomePage } from "./pages/HomePage";
// import { Cruises } from "./pages/MainCruisePage";
// import { CruiseDetails } from "./api/CruiseDetails";
// import { AllCities } from "./pages/AllCities";
// import { HotelDetails } from "./api/HotelDetails";
// import { CityManagement } from "./admin/Manage/CityManagement";
// import { CruiseManagement } from "./admin/Manage/CruiseManagement";
// import { PlanManagement } from "./admin/Manage/planManagment";
// import BungalowDetails from "./api/Bungalows";
// import { Plan } from "./pages/Plan";
// import { AdminDashboard } from "./admin/AdminDashboard";
// import AdminPage from "./test/AdminPage";
// import BungalowDisplay from "./test/BungalowDisplay";
// import CityUploadPage from "./test/CityUploadPage";
// import CruiseUploadPage from "./admin/Manage/CruiseUploadPage";
// import Login from "./admin/Login";
// import Register from "./admin/Regsiter";
// import AuthProvider from "./context/Auth/AuthProvider";
// import Navbar from "./components/NavBar";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           {/* Admin Routes */}
//           <Route path="/admin/login" element={<Login />} />
//           {/* Public Routes */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/cruise" element={<Cruises />} />
//           <Route path="/bungalows" element={<BungalowDetails />} />
//           <Route path="/cruise/:month" element={<CruiseDetails />} />
//           <Route path="/cities" element={<AllCities />} />
//           <Route path="/cities/:cityname/hotels" element={<HotelDetails />} />
//           <Route path="/plan" element={<Plan />} />
//           {/* Protected Admin Routes */}
//           <Route element={<ProtectedRoute />}>
//             <Route path="/admin/register" element={<Register />} />
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/cities" element={<CityManagement />} />
//             <Route path="/admin/cruises" element={<CruiseManagement />} />
//             <Route path="/admin/plan" element={<PlanManagement />} />
//             <Route path="/admin/bungalows" element={<AdminPage />} />
//             <Route path="/admin/bungalow-display" element={<BungalowDisplay />} />
//             <Route path="/admin/city-upload" element={<CityUploadPage />} />
//             <Route path="/admin/cruise-upload" element={<CruiseUploadPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth();
//   // If not authenticated, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate to="/admin/login" />;
//   }
//   return <Outlet />; // This will render the child routes (admin pages)
// };

// export default App;

import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useAuth } from "./context/Auth/AuthContext"; // Ensure the correct import

import { HomePage } from "./pages/HomePage";
import { Cruises } from "./pages/MainCruisePage";
import { CruiseDetails } from "./api/CruiseDetails";
import { AllCities } from "./pages/AllCities";
import { HotelDetails } from "./api/HotelDetails";
import { CityManagement } from "./admin/Manage/CityManagement";
import { CruiseManagement } from "./admin/Manage/CruiseManagement";
import { PlanManagement } from "./admin/Manage/planManagment";
import BungalowDetails from "./api/Bungalows";
import { Plan } from "./pages/Plan";
import { AdminDashboard } from "./admin/AdminDashboard";
import AdminPage from "./test/AdminPage";
import BungalowDisplay from "./test/BungalowDisplay";
import CityUploadPage from "./test/CityUploadPage";
import CruiseUploadPage from "./admin/Manage/CruiseUploadPage";
import Login from "./admin/Login";
import Register from "./admin/Regsiter";
import AuthProvider from "./context/Auth/AuthProvider";
import Navbar from "./components/NavBar";
import AdminNavbar from "./admin/Manage/AdminNavbar";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
};
// Done
const Layout = () => {
  const location = useLocation();

  // Check if the current path is "/admin" or starts with "/admin", excluding "/admin/login"
  const isAdminRoute =
    location.pathname.startsWith("/admin") &&
    location.pathname !== "/admin/login";

  return (
    <>
      {/* Render Navbar only if not on admin routes and not on the /admin/login route */}
      {!isAdminRoute && location.pathname !== "/admin/login" && <Navbar />}

      {/* Render AdminNavbar only if on admin routes but not on the /admin/login route */}
      {isAdminRoute && <AdminNavbar />}

      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cruise" element={<Cruises />} />
        <Route path="/bungalows" element={<BungalowDetails />} />
        <Route path="/cruise/:month" element={<CruiseDetails />} />
        <Route path="/cities" element={<AllCities />} />
        <Route path="/cities/:cityname/hotels" element={<HotelDetails />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/cities" element={<CityManagement />} />
          <Route path="/admin/cruises" element={<CruiseManagement />} />
          <Route path="/admin/plan" element={<PlanManagement />} />
          <Route path="/admin/bungalows" element={<AdminPage />} />
          <Route path="/admin/bungalow-display" element={<BungalowDisplay />} />
          <Route path="/admin/city-upload" element={<CityUploadPage />} />
          <Route path="/admin/cruise-upload" element={<CruiseUploadPage />} />
        </Route>
      </Routes>
    </>
  );
};

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }
  return <Outlet />; // This will render the child routes (admin pages)
};

export default App;
