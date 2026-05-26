import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GehgehUniversity from "./pages/GehgehUniversity";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-50 antialiased selection:bg-brand-blue/20 selection:text-brand-blue">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gehgehuniversity" element={<GehgehUniversity />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
