import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ServiceForm from './components/ServiceForm';
import JobVacancies from './components/JobVacancies';
import CarBooking from './components/CarBooking';
import FlatBooking from './components/FlatBooking';
import './App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname !== '/') {
      navigate(-1);
    }
  };

  return (
    <div className="back-button-container">
      <button className="back-button" onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};


function App() {
  return (
    <Router>
      <BackButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-form" element={<ServiceForm />} />
        <Route path="/job-vacancies" element={<JobVacancies />} />
        <Route path="/car-booking" element={<CarBooking />} />
        <Route path="/flat-booking" element={<FlatBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
