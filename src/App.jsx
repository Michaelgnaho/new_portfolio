import { BrowserRouter } from "react-router-dom";
import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas,
  Socials
} from "./components";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />

        <Works />
        <Feedbacks />
        
        <div className="relative z-0">
          <Contact /> 
          <StarsCanvas />
        </div>

        <Socials />
      </div>
    </BrowserRouter>
  );
};

export default App;