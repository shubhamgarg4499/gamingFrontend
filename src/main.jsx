import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './Gamepage';
import Header from './Header';
import Ooutlet from './Ooutlet';
import AboutUs from './About';
import PrivacyPolicy from './Privacy';
import ContactUs from './Contact';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import GameDistributionHome from './GameDistributionHome';
import GameDistributionPage from './GameDistributionPage';
// const Provider = RouterProvider
createRoot(document.getElementById('root')).render(
  // const routing = createBrowserRouter(Br)
  <StrictMode>

    {/* <App /> */}

    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Ooutlet />} >
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<GameDistributionHome />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/about' element={<AboutUs />} />
          <Route path='/policy' element={<PrivacyPolicy />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/:id' element={<GameDistributionPage />} />
          {/* <Route path='/:id' element={<GamePage />} /> */}

        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
