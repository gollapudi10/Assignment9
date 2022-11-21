
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './App/Home/Home';
import About from './App/About/About';
import Jobs from './App/Jobs/Jobs';
import Contacts from './App/Contact/Contacts';
import Error from './App/Pages/Error';
import { Login } from './App/Login/Login';

function App() {
  return (
    <Router>
      <div className="x2">
        <nav>
          <Link to='/home' > HOME&nbsp;&nbsp;&nbsp;</Link>{"     "}
          <Link to='/About'> ABOUT-US&nbsp;&nbsp;&nbsp;</Link>   {"     "}
          <Link to='/Jobs'> JOBS&nbsp;&nbsp;&nbsp;</Link>  {"    "}
          <Link to='/Contacts'>  CONTACT</Link>   {"    "}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}



export default App;
