
import { Routes, Route } from "react-router-dom"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
function AllRoutes(){

return(
    <div>
<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path="Login" element={ <Login/> } />
      </Routes>
    </div>
)

}

export default AllRoutes