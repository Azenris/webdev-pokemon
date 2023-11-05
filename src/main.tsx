import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter , useLocation } from 'react-router-dom';
import "./main.css";

function ScrollToTop() {
  const { pathname } = useLocation();

 React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter >
  </React.StrictMode>
);