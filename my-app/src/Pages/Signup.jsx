
import ResponsiveAppBar from '../components/Navbar'
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from '../firebase'
import "../Styles/Signup.css"
const auth=getAuth(app)

function Signup(){

const SignupUser=()=>{

    createUserWithEmailAndPassword(

auth,
"dhirajgarad46@gmail.com",
"dhiraj123"

    ).then((val)=>console.log(val))
};

    return (
        <div>
            <ResponsiveAppBar/>
<section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Signup</h2>
                   
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label for="">Password</label>
                    </div>
                   
                    <button>Signup</button>
                    <div class="register">
                        <p>Already  have an account <a href="#">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Signup