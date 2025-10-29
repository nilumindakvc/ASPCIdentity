import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { baseurl } from "../../config";




export default function SignIn({set_common_signIn_signUp_state,setUserLogedIn}) {
    const navigate =useNavigate();
    const [loginErrorMessage,setLoginErrorMessage]=useState(false);
    const [error,setError]=useState(" ");
    const [opacity,setOpacity]=useState(100);


    const [loginUser,setLoginUser] =useState({
      username:"",
      password:""
    });

    const handleLogin=async(e)=>{
      e.preventDefault();
      try{
        const response =await axios.post(`${baseurl}/login`,loginUser);
        if(response.status==200){
          setOpacity(50);
          console.log(response);
          set_common_signIn_signUp_state(0);
          console.log(response.data)
          setUserLogedIn(response.data);
          localStorage.setItem("user",JSON.stringify(response.data));
          navigate("/Home");
        }
        
      }catch(err){
        console.log(err);
        setError("Invalid Credentials");
        setLoginErrorMessage(true);
      }
        
    }


  return (
    <form id="signIn_form_id">
      <div class="mb-3">
        <p className="display-5 mb-4">SignIn</p>
        <label for="exampleInputEmail1" class="form-label" >
          UserName
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={loginUser.username}
          onChange={(e)=>{
            setLoginUser({...loginUser,username:e.target.value});
            setLoginErrorMessage(false);}}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
          value={loginUser.password}
          onChange={(e)=>{
            setLoginUser({...loginUser,password:e.target.value});
            setLoginErrorMessage(false);}}
        />
      </div>
     
      <div className="d-flex  flex-column justify-content-center ">
         <label for="exampleInputPassword1" class="form-label text-danger">
          <p>{loginErrorMessage==true?error:<span></span>}</p>
         
        </label>
        <button type="submit" class={`btn btn-primary ps-5 pe-5 mt-2 opacity-${opacity}`} id="signIn_button"
         onClick={(e)=>handleLogin(e)} >
          Sign In
        </button>
      </div>
    </form>
  );
}
