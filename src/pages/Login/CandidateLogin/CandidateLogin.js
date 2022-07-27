import React from "react";

const CandidateLogin = () => {
  return (
    <form>
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
