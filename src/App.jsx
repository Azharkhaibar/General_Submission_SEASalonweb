import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./frontend/components/home";
import { Reservation } from "./frontend/components/reservation";
import { Services } from "./frontend/components/service";
import { Coloring } from "./layout/coloring";
import { Haircut } from "./layout/haircut";
import { FacialTreatment } from "./layout/facialtreatment";
import { Pedicure } from "./layout/predicure";
import "./sass/App.scss";
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/coloring" element={<Coloring />} />
          <Route path="/facialtreatment" element={<FacialTreatment />} />
          <Route path="/haircut" element={<Haircut />} />
          <Route path="/predicure" element={<Pedicure />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
