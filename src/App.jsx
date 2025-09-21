import { Routes, Route } from 'react-router-dom';
import Popup from './components/Popup';
import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import About from "./pages/About";
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <>
      {/* <Popup /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
      <Footer />
    </>
  );
}
