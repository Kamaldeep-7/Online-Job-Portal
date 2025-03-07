
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

import JobList from './pages/JobList';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
  
      <BrowserRouter>
      <AuthProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="contact/" element = {<Contact/>}/>
        <Route path="about/" element = {<About/>}/>
        <Route path="register/" element = {<Register/>}/>
        <Route path="login/" element = {<Login/>}/>       
        <Route path="services/" element = {<Services/>}/> 
        <Route path="joblist/" element = {<JobList/>}/> 
   
      </Routes>
      <Footer></Footer>
      </AuthProvider>
      </BrowserRouter>
   
  );
}

export default App;
