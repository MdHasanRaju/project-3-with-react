import React from 'react';
import { useNavigate } from 'react-router-dom';

const DemoLogin = () => {
  const navigate = useNavigate();
  const demoForm = e => {
    e.preventDefault();
    navigate("/recruiter-dashboard")

  }

  return (
    <div>
       <div class="container mt-5">
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-outline-success btn-lg float-right" data-toggle="modal" data-target="#exampleModal">
    Open Modal
  </button>
  
  {/* <!-- Modal --> */}
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        
        <div class="modal-body">
            <form onSubmit={demoForm}>
                <div class="form-group">
                    <label>uname</label>
                    <input type="text" class="form-control" placeholder="User Name"/>
                    <label>upwd</label>
                    <input type="password" class="form-control" placeholder="password"/>
            <button type="submit" class="btn btn-success" value="submit" data-bs-dismiss="modal">Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    
</div>
    </div>
  );
};

export default DemoLogin;