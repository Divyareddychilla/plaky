import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Header from "./components/header";
import Mainspace from "./pages/Mainspace";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Hrrequests from "./pages/Hrrequests";
import Newscrumboard from "./pages/Newscrumboard";
import Oadate from "./pages/Oadate";
import Oaplanning from "./pages/Oaplanning";
import Scrumboard from "./pages/Scrumboard";
import Scrumboard1 from "./pages/Scrumboard1";
import Socialmediacalender from "./pages/Socialmediacalender";
import Ss from "./pages/Ss";
import Homepagecontent from "./pages/Homepagecontent"
import Democolor from './pages/democolor';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/Democolor" element={<Democolor />} />
      <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Mainspace" element={<Mainspace />} />
        <Route path="/Homepagecontent" element={<Sidebar><Homepagecontent /></Sidebar>} />
        <Route path="/Design" element={<Sidebar><Design /></Sidebar>} />
        <Route path="/Development" element={<Sidebar><Development /></Sidebar>} />
        <Route path="/Hrrequests" element={<Sidebar><Hrrequests /></Sidebar>} />
        <Route path="/Newscrumboard" element={<Sidebar><Newscrumboard /></Sidebar>} />
        <Route path="/Oadate" element={<Sidebar><Oadate /></Sidebar>} />
        <Route path="/Oaplanning" element={<Sidebar><Oaplanning /></Sidebar>} />
        <Route path="/Scrumboard" element={<Sidebar><Scrumboard /></Sidebar>} />
        <Route path="/Scrumboard1" element={<Sidebar><Scrumboard1 /></Sidebar>} />
        <Route path="/Socialmediacalender" element={<Sidebar><Socialmediacalender /></Sidebar>} />
        <Route path="/Ss" element={<Sidebar><Ss /></Sidebar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;