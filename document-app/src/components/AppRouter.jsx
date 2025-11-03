import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DevisForm from "../forms/DevisForm";
import Home from "../pages/Home";


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devis-form" element={<DevisForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;