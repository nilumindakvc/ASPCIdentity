
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"
import Home from "./Home/Home";
import Login from "./Login/Login";
import Nav from "./components/Nav";





function App() {
   const [signInState,setSignInState]=useState(1);
   const [commonSignIn_SignUp_state,set_common_signIn_signUp_state]=useState(1);
   const [userLogedIn,setUserLogedIn]=useState(null);
   const [isEverythingReady,setIsEverythingReady]=useState(true);


     
     useEffect(
       ()=>{
            if(window.location.pathname!='/'){
              set_common_signIn_signUp_state(0);
            }
            const savedUser = localStorage.getItem("user");
            if (savedUser) {
              setUserLogedIn(JSON.parse(savedUser));
            }
            
       },[]);
      
    
  return (
    
      <div className="main_container">
        <div className="navigation_container">
          <Nav signInState={signInState} setSignInState={setSignInState} commonSignIn_SignUp_state={commonSignIn_SignUp_state} 
           set_common_signIn_signUp_state={set_common_signIn_signUp_state}
          userLogedIn={userLogedIn}/>
        </div>

        <div className="page_container">
          <Routes>

            <Route path="/" element={<Login signInState={signInState} setSignInState={setSignInState} setUserLogedIn={setUserLogedIn}
             set_common_signIn_signUp_state={set_common_signIn_signUp_state} commonSignIn_SignUp_state={commonSignIn_SignUp_state}/>}/>
            
            <Route path="/Home" element={<Home isEverythingReady={isEverythingReady} />} />
            
            
          </Routes>
        </div>
      </div>
    
  )
}

export default App
