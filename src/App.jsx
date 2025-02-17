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



// import { Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import About from "./About";
// import SignIn from "./SignIn";
// import HeroSection from "./HeroSection";
// import FeaturesSection from "./Features";
// import Ticker from "./Ticker";
// import ActionSection from "./ActionSection";
// import Footer from "./Footer";
// import HealthcareChatbot from "./HealthcareChatbot";
// import { HospitalBed } from "./HospitalBed";
// import { Bloodbank } from "./Bloodbank";
// import { Appointment } from "./Appointment";
// import { EmergencyServices } from "./EmergencyServices";

// function App() {
//   return (
//     <>
//       <Header /> {/* Navbar */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <FeaturesSection />
//               <Ticker />
//               <ActionSection />
//               <Footer />
//               <HealthcareChatbot />
//             </>
//           }
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/hospital-beds" element={<HospitalBed />} />
//         <Route path="/blood-bank" element={<Bloodbank />} />
//         <Route path="/appointment" element={<Appointment />} />
//         <Route path="/emergency-services" element={<EmergencyServices />} />
//       </Routes>
//     </>
//   );
// }

// export default App;