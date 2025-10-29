import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { baseurl } from "../../config";




export default function SignUp({ setSignInState}) {

  
  const handleSignUp=async(e)=>{
    e.preventDefault();
    try{
      if(newUser.userName==''|| newUser.email=='' || newUser.password==''){
        setAllFieldsOk(false);
        setSignInState(0);
        return;
      }
      setCardOpacity(50);
      setDisableEdit(true);
      const response =await axios.post(`${baseurl}/register`,newUser);
      response.data?setSignInState(1):setSignInState(0);
    }catch(err){
      console.log(err);
    }
  }

  const [allfieldsok,setAllFieldsOk]=useState(true);
  const [cardopacity,setCardOpacity]=useState(100);
  const [disableedit,setDisableEdit]=useState(false);


  const [newUser,setNewUser]=useState({
    userName:'',
    email:'',
    password:'',
    roles:["User"]
  })

  console.log(newUser);
  return (
    <form id="signUp_form_id" className={`opacity-${cardopacity}`}>
      <div class="mb-3">
        <p className="display-5 mb-4">SignUp</p>
        
        <label for="exampleInputEmail1" class="form-label">
         UserName
        </label>
        
        <input
          type="text"
          class="form-control"
          id="firstName"
          aria-describedby="emailHelp"
          value={newUser.firstName}
          disabled={disableedit}
          onChange={(e)=>{
            setNewUser({...newUser,userName:e.target.value});
            setAllFieldsOk(true);}}
        />
       
        <label for="exampleInputEmail1" class="form-label">
         Email
        </label>

        <input
          type="text"
          class="form-control"
          id="emailOnSignUp"
          value={newUser.email}
          disabled={disableedit}

          onChange={(e)=>{
            setNewUser({...newUser,email:e.target.value});
            setAllFieldsOk(true);}}
        />
      </div>
      <div class="mb-3">
         
        <label for="exampleInputEmail1" class="form-label">
         Password
        </label>

        <input
          type="password"
          class="form-control"
          id="passwordOnSignUp"
          value={newUser.password}
          disabled={disableedit}
          onChange={(e)=>{
            setNewUser({...newUser,password:e.target.value});
            setAllFieldsOk(true);}}
        />
      </div>
      <div className="d-flex flex-column justify-content-center  mt-1">
       
          
        {allfieldsok==false?<label for="exampleInputEmail1" class="form-label text-danger fs-6">
         All fields are mandatory!
        </label>:<span></span>}
         <button
          type="submit"
          class="btn btn-primary ps-5 pe-5 mt-2"
          disabled={disableedit}
          onClick={(e) => handleSignUp(e)}
          id="signUp_button"
        >
          Submit
        </button>

       
       
      </div>
    </form>
  );
}
