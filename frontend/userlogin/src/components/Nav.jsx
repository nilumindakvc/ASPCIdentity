import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Nav({setSignInState,commonSignIn_SignUp_state,set_common_signIn_signUp_state,
  userLogedIn
}) {

  
  
  const navigate =useNavigate();

  

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
      <div className="container-fluid bg-light">
        <NavLink className="navbar-brand " to="/Home">
          Agent
        </NavLink>
        <button
          className="navbar-toggler me-5 z-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink className={`nav-link ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`} to="/Home" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={`nav-link ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`} to="/Home">
               Find Agent
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={`nav-link ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`} to="/Home">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={`nav-link ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`} to="/Home">
               Register & Publish
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={`nav-link ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`} to="/Home">
               Agencies 
              </NavLink>
            </li>
             <li className="nav-item me-3">
              <NavLink className={`nav-link ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`} to="/Home">
               Ratings
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <button type="button" className={`btn btn-primary me-1 ${commonSignIn_SignUp_state==0?"visually-hidden":" "} `} 
            onClick={()=>setSignInState(1)}>
               SignIn
            </button>
            <button type="button" className={`btn btn-outline-primary me-1 ${commonSignIn_SignUp_state==0?"visually-hidden":" "}`} 
             onClick={()=>setSignInState(0)} id="signup_button_id">
              SignUp
            </button>
            <div className="d-flex justify-content-center align-items-center gap-5">
              {/* <p className={`fs-6 fw-lighter ${commonSignIn_SignUp_state==1?"visually-hidden":" "}`}>
                <i class="bi bi-person-circle"></i>
                <span className="ms-2 me-1">{userLogedIn?.username}</span>
              </p> */}
            <button type="button" className={`btn btn-primary me-1 ${commonSignIn_SignUp_state==1?"visually-hidden":" "} `} 
             onClick={()=>{setSignInState(1);navigate('/');set_common_signIn_signUp_state(1)}}>
              Logout
            </button>
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
}
