import React from "react";
import {useNavigate} from 'react-router-dom';

const CandidateLogin = () => {
  const navigate = useNavigate();

  const handleCandidateLogin = (e) => {
    e.preventDefault();
    navigate('/recruiter-dashboard')
  } 

  return (
    <form onSubmit={handleCandidateLogin}>
      <h6>Candidate</h6>
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

export default CandidateLogin;
