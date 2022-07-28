import React from "react";
import {useNavigate} from 'react-router-dom'; 

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const handleRecruiterLogin = (e) => {
    e.preventDefault();
    navigate('/recruiter-dashboard')
  }
  return (
    <form onSubmit={handleRecruiterLogin}>
      <h6>Recruiter</h6>
      <input type="text" name="user" placeholder="Username" />
      <input type="password" name="pass" placeholder="Password" />
      <input
        type="submit"
        name="login"
        class="login loginmodal-submit"
        value="Login"
      />
    </form>
  );
};

export default RecruiterLogin;