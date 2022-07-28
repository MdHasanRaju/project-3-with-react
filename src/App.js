import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import JobSeekers from "./pages/JobSeekers/JobSeekers/JobSeekers";
import Navbar from "./pages/Shared/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs/AboutUs";
import Features from "./pages/Features/Features/Features";
import Recruiters from "./pages/Recruiters/Recruiters/Recruiters";
import Login from "./pages/Login/Login";
import RecruiterDashboard from "./pages/Dashboard/RecruiterDashboard/RecruiterDashboard";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <Navbar /> */} 
      {location.pathname === '/recruiter-dashboard' ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/features-in" element={<Features />} />
        <Route path="/connect" element={<Recruiters />} />
        <Route path="/job-seeker" element={<JobSeekers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
