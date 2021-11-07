import './App.css';
import Login from './components/loginform';
import Home from './components/home';
import Navbar from './components/navbar';
import Register from './components/regisform';

function App() {
  return (
    <div className="App font-base">
      <Navbar />
      {/* <Home /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
