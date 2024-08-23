import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SelectAdmission from './components/SelectAdmission';
import { ControlledCarousel } from './components/Creousal';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dummy data components
// const Home = () => <h2>You are in the Home</h2>;
const Admission = () => <h2>You are in the Admission</h2>;
const ScholarShipProgram = () => <h2>You are in the ScholarShipProgram</h2>;
const Affiliation = () => <h2>You are in the Affiliation</h2>;
const AboutMIF = () => <h2>You are in the AboutMIF</h2>;
const ContactUs = () => <h2>You are in the ContactUs</h2>;
const DonateNow = () => <h2>You are in the DonateNow</h2>;


// Layout Component
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  <SelectAdmission/> {/* This is where the routed content will be rendered */}
  </>
);

// Main App Component
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ControlledCarousel/>} />
        <Route path="admission" element={<Admission />} />
        <Route path="scholarship-program" element={<ScholarShipProgram />} />
        <Route path="affiliation" element={<Affiliation />} />
      <Route path="About-mif" element={<AboutMIF />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="donate-now" element={<DonateNow />} />


      </Route>
    </Routes>
  );
};

export default App;
