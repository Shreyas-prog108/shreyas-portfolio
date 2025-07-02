import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Front from './Pages/Front.jsx';
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Front />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
);
