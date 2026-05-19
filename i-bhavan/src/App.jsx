import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { IBhavanNav2 } from './components/IBhavanNav2.jsx';
import { IBhavanFooter } from './components/IBhavanFooter.jsx';
import { GetInTouchModal } from './components/IBhavanShared.jsx';
import { IBhavanHome2 } from './components/IBhavanHome2.jsx';
import { ServicePage, IBhavanAbout2 } from './components/IBhavanServicePages.jsx';
import { IBhavanProducts2, IBhavanBlogs, IBhavanCareers2, IBhavanJobDetail } from './components/IBhavanOtherPages.jsx';

const App = () => {
  const location = useLocation();
  const navigateHook = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ibhavan_theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ibhavan_theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navigate = (id) => {
    if (id === 'home') navigateHook('/');
    else navigateHook(`/${id}`);
  };

  const openGetInTouch = () => setModalOpen(true);
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  // Map pathname to currentPage for navbar active state
  const pathname = location.pathname;
  let currentPage = 'home';
  if (pathname === '/') currentPage = 'home';
  else if (pathname === '/about') currentPage = 'about';
  else if (pathname === '/smart-home') currentPage = 'smart-home';
  else if (pathname === '/hr-solutions') currentPage = 'hr-solutions';
  else if (pathname === '/it-solutions') currentPage = 'it-solutions';
  else if (pathname === '/business-solutions') currentPage = 'business-solutions';
  else if (pathname === '/products') currentPage = 'products';
  else if (pathname === '/blogs') currentPage = 'blogs';
  else if (pathname === '/careers' || pathname.startsWith('/careers/')) currentPage = 'careers';

  return (
    <div>
      <IBhavanNav2 currentPage={currentPage} navigate={navigate} openGetInTouch={openGetInTouch} theme={theme} toggleTheme={toggleTheme} />
      <div key={location.pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<IBhavanHome2 navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/home" element={<IBhavanHome2 navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/about" element={<IBhavanAbout2 navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/smart-home" element={<ServicePage slug="smart-home" navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/hr-solutions" element={<ServicePage slug="hr-solutions" navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/it-solutions" element={<ServicePage slug="it-solutions" navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/business-solutions" element={<ServicePage slug="business-solutions" navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/products" element={<IBhavanProducts2 navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/blogs" element={<IBhavanBlogs navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/careers" element={<IBhavanCareers2 navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="/careers/:jobId" element={<IBhavanJobDetail navigate={navigate} openGetInTouch={openGetInTouch} />} />
          <Route path="*" element={<IBhavanHome2 navigate={navigate} openGetInTouch={openGetInTouch} />} />
        </Routes>
        <IBhavanFooter navigate={navigate} openGetInTouch={openGetInTouch} />
      </div>
      <GetInTouchModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <button className="float-contact" onClick={openGetInTouch}>💬 Get in Touch</button>
    </div>
  );
};

export default App;
