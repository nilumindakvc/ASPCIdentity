
import Footer from "../components/Footer";
import "./Login.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login({ signInState, setSignInState,set_common_signIn_signUp_state,commonSignIn_SignUp_state,setUserLogedIn}) {
  return(
    <>
    
   <div className="main_container_login">
   <div className="login_card_container bg-secondary-subtle mb-3">
    {signInState==1?
    <SignIn signInState={signInState} setSignInState={setSignInState} set_common_signIn_signUp_state={set_common_signIn_signUp_state}
     commonSignIn_SignUp_state={commonSignIn_SignUp_state} setUserLogedIn={setUserLogedIn}/>:

    <SignUp setSignInState={setSignInState} commonSignIn_SignUp_state={commonSignIn_SignUp_state}/>
     }
   </div>
  </div>
  <Footer/>
  </>
  )
}
