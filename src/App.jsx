import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import SignIn from './SignIn';
import HeroSection from './HeroSection';
import FeaturesSection from './Features';
import Ticker from './Ticker';
import ActionSection from './ActionSection';
import Footer from './Footer';
import HealthcareChatbot from './HealthcareChatbot';
import { HospitalBed } from './HospitalBed';
import { Bloodbank } from './Bloodbank';

function App() {
  return (
    <>
      <Header /> {/*navbar*/}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <Ticker />
              <ActionSection />
              <Footer />
              <HealthcareChatbot />
            </>
          } 
        />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/hospital-beds" element={<HospitalBed />} />
        <Route path="/blood-bank" element={<Bloodbank />} />
      </Routes>
    </>
  );
}

export default App;
