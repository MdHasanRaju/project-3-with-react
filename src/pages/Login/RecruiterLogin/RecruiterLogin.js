import React from "react";

const RecruiterLogin = () => {
  return (
    <form>
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
