import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Exp from './exp';
import ResponsiveAppBar from './components/Navbar';
import AllRoutes from './AllRoutes/Routes';
function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
