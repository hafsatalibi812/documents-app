import { BrowserRouter , Routes, Route } from "react-router-dom";
import DevisForm from "../forms/DevisForm";
import DevisPreview from "../forms/DevisPreview";
import Home from "../pages/Home";
import About from "../pages/About"; 



function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/devis-form" element={<DevisForm />} />
      <Route path="/devis-preview" element={<DevisPreview />} />
    </Routes>
  );
}

export default AppRouter;