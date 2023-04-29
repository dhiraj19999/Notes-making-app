
import '../Styles/Login.css'
import{ getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase'
import ResponsiveAppBar from '../components/Navbar'
const auth=getAuth(app)
function Login(){

const SignupUser=()=>{

    signInWithEmailAndPassword(

auth,
"dhirajgarad46@gmail.com",
"dhiraj123"

    ).then((val)=>console.log(val))
    .catch((err)=>console.log(err))
};

    return (
      <div>
<ResponsiveAppBar/>
<img class="wave" src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
	<div class="container">
		<div class="img">
			<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg"/>
		</div>
		<div class="login-content">
			<form action="index.html">
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg"/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input"/>
            	   </div>
            	</div>
            	<a href="#">Sign Up</a>
            	<input type="submit" class="btn" value="Login"/>
            </form>
        </div>
    </div>



      </div>
    )
}

export default Login