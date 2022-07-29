import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import JobSeekers from "./pages/JobSeekers/JobSeekers/JobSeekers";
import Navbar from "./pages/Shared/Navbar/Navbar"; 
import Features from "./pages/Features/Features/Features";
import Recruiters from "./pages/Recruiters/Recruiters/Recruiters"; 
import RecruiterDashboard from "./pages/Dashboard/RecruiterDashboard/RecruiterDashboard";
import { useLocation } from "react-router-dom"; 

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/recruiter-dashboard" ||
      location.pathname === "/candidate-dashboard" ? null : (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features-in" element={<Features />} />
        <Route path="/connect" element={<Recruiters />} />
        <Route path="/job-seeker" element={<JobSeekers />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
