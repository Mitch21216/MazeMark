import { Routes, Route} from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import AboutVision from './Pages/AboutVision/AboutVision';
import Header from './Layoyt/Header/Header';
import Footer from './Layoyt/Footer/Footer';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';



function App() {
  const [show,setShow] = useState(true);
  
  return (
    <>
      <Header setShow={setShow} show={show}/>
      <Routes  >
        <Route path="/" element={<Home show={show} setShow={setShow} />} />
        <Route path="/services" element={<Services setShow={setShow} />} />
        <Route path="/about/vision" element={<AboutVision setShow={setShow} />} />
      </Routes>
      <Row className='footer-row'>
        <Footer />
      </Row>
      
    </>
  );
}

export default App;
