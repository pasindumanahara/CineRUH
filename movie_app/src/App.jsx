import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutProject from "./pages/AboutProject";

function ProtectedRoute({ children }) {
  // Authenitcating flag
  const isLoggedIn = localStorage.getItem("isLoggedIn"); 

  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/" replace />; 
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Home page with nav bar protected */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <NavBar />
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Sign up */}
      <Route path="/signup" element={<SignUp />} />

      <Route path="/aboutproject" element={<AboutProject />}/>
      
    </Routes>
  );
}

