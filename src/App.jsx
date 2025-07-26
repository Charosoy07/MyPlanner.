import React from 'react';
import HeroSection from './home/HeroSection';
import Section from './home/Section';
import LoginComponent from './login/Login';
import PlannerComponent from './planner/Planner';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
function Home() {
  return (
    <div>
      <HeroSection />
      <Section />
    </div>
  );
}
function Login() {
  return (
    <div>
      <LoginComponent />
    </div>
  );
}
function Planner() {
  return (
    <div>
      <PlannerComponent />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;