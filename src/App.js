import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SelectAdmission from './components/SelectAdmission';
import { ControlledCarousel } from './components/Creousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ColorTabs from './pages/AboutMIF/MainPage';

// Dummy data components
// const Home = () => <h2>You are in the Home</h2>;
const Admission = () => <h2>You are in the Admission</h2>;
const ScholarShipProgram = () => <h2>You are in the ScholarShipProgram</h2>;
const Affiliation = () => <h2>You are in the Affiliation</h2>;
const AboutMIF = () => <AboutUs />;
const ContactUs = () => <h2>You are in the ContactUs</h2>;
const DonateNow = () => <h2>You are in the DonateNow</h2>;


// Layout Component
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />



  </>
);

// Main App Component
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ControlledCarousel />} />
        <Route path="admission" element={<Admission />} />
        <Route path="scholarship-program" element={<ScholarShipProgram />} />
        <Route path="affiliation" element={<Affiliation />} />
        <Route path="/about"  >
          <Route path='history' element={<ColorTabs tab={'history'} />} />
          <Route path='vision' element={<ColorTabs tab={'vision'} />} />
          <Route path='international_collabration' element={<ColorTabs tab={'international_collabration'} />} />
          <Route path='events' element={<ColorTabs tab={'events'} />} />
          <Route path='campuses' element={<ColorTabs tab={'campuses'} />} />
        </Route>
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="donate-now" element={<DonateNow />} />


      </Route>
    </Routes>
  );
};

export default App;
