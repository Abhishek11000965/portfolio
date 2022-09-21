import './App.css';
import Navbar from './Navbar';
import Top from './top';
import Contactme from './Contactme';
import Experience from './Experience';
import Skills from './Skills';
import Recommendations from './Recommendations';
import Aboutme from './Aboutme';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>

    <BrowserRouter>
      <Top />
      < Navbar />

      <Routes>
      <Route path="/" element={<Aboutme />} />
      <Route path="/Contactme" element={<Contactme />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Recommendations" element={<Recommendations />} />


      </Routes>

    </BrowserRouter>
    
      
      {/* < Experience /> */}
      
    </div>
  );
}

export default App;
