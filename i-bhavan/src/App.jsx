import React, { useState, useEffect } from 'react';
import { IBhavanNav2 } from './components/IBhavanNav2.jsx';
import { IBhavanFooter } from './components/IBhavanFooter.jsx';
import { GetInTouchModal } from './components/IBhavanShared.jsx';
import { IBhavanHome2 } from './components/IBhavanHome2.jsx';
import { ServicePage, IBhavanAbout2 } from './components/IBhavanServicePages.jsx';
import { IBhavanProducts2, IBhavanBlogs, IBhavanCareers2, IBhavanJobDetail } from './components/IBhavanOtherPages.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ibhavan_page') || 'home';
    }
    return 'home';
  });
  const [jobId, setJobId] = useState(null);
  const [pageKey, setPageKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ibhavan_theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('ibhavan_page', currentPage);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ibhavan_theme', theme);
  }, [currentPage, theme]);

  const navigate = (id) => {
    setJobId(null);
    setCurrentPage(id);
    setPageKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGetInTouch = () => setModalOpen(true);
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  let PageContent;
  if (jobId) {
    PageContent = <IBhavanJobDetail jobId={jobId} setJobId={setJobId} navigate={navigate} openGetInTouch={openGetInTouch} />;
  } else if (currentPage === 'home') {
    PageContent = <IBhavanHome2 navigate={navigate} openGetInTouch={openGetInTouch} />;
  } else if (currentPage === 'about') {
    PageContent = <IBhavanAbout2 navigate={navigate} openGetInTouch={openGetInTouch} />;
  } else if (['smart-home','hr-solutions','it-solutions','business-solutions'].includes(currentPage)) {
    PageContent = <ServicePage slug={currentPage} navigate={navigate} openGetInTouch={openGetInTouch} />;
  } else if (currentPage === 'products') {
    PageContent = <IBhavanProducts2 navigate={navigate} openGetInTouch={openGetInTouch} />;
  } else if (currentPage === 'blogs') {
    PageContent = <IBhavanBlogs navigate={navigate} openGetInTouch={openGetInTouch} />;
  } else if (currentPage === 'careers') {
    PageContent = <IBhavanCareers2 navigate={navigate} openGetInTouch={openGetInTouch} setJobId={setJobId} />;
  } else {
    PageContent = <IBhavanHome2 navigate={navigate} openGetInTouch={openGetInTouch} />;
  }

  return (
    <div>
      <IBhavanNav2 currentPage={currentPage} navigate={navigate} openGetInTouch={openGetInTouch} theme={theme} toggleTheme={toggleTheme} />
      <div key={pageKey + '-' + (jobId || 'page')} className="page-enter">
        {PageContent}
        <IBhavanFooter navigate={navigate} openGetInTouch={openGetInTouch} />
      </div>
      <GetInTouchModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <button className="float-contact" onClick={openGetInTouch}>💬 Get in Touch</button>
    </div>
  );
};

export default App;
