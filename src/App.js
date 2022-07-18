import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import JobSeekers from "./pages/JobSeekers/JobSeekers/JobSeekers";
import Navbar from "./pages/Shared/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs/AboutUs";
import Features from "./pages/Features/Features/Features";
import Recruiters from "./pages/Recruiters/Recruiters/Recruiters"; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/features-in" element={<Features />} />
        <Route path="/connect" element={<Recruiters />} />
        <Route path="/job-seeker" element={<JobSeekers />} />
      </Routes>
    </div>
  );
}

export default App;
