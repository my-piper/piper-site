import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiAssistant from './components/AiAssistant';
import UseCases from './components/UseCases';
import MakeApps from './components/MakeApps';
import Deploy from './components/Deploy';
import AllModels from './components/AllModels';
import OpenSource from './components/OpenSource';
import EditingTools from './components/EditingTools';
import PayAsYouGo from './components/PayAsYouGo';
import Footer from './components/Footer';
import Company from './pages/Company';
import GDPR from './pages/GDPR';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <AllModels />
    <AiAssistant />
    <OpenSource />
    <EditingTools />
    <PayAsYouGo />
    <MakeApps />
    <Deploy />
    <UseCases />
  </>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
