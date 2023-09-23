import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Hooks from './pages/Hooks'
import Form from './pages/Form'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/hooks" element={<Hooks />}/>
        <Route path="form" element={<Form />} />
        


        </Routes>
      </Router>
    </div>
  );
}

export default App;
