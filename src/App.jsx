import React from 'react';
import { Routes, Route, useParams, Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
import CookieConsent from './components/CookieConsent';

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

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['en', 'ru'].includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, [lang, i18n]);

  if (!['en', 'ru'].includes(lang)) {
    return <Navigate to="/en/" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route index element={<HomePage />} />
            <Route path="company" element={<Company />} />
            <Route path="gdpr" element={<GDPR />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="/" element={<Navigate to="/en/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
