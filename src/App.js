import Screen from "./pages/Screen";
import Success from "./pages/Success";
import Session from "./pages/Session";
import Seat from "./pages/Seat";
import {BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="/sessoes/:idFilme" element={<Session />} />
        <Route path="/assentos/:idSessao" element={<Seat />} />
      </Routes>
    
    
    </BrowserRouter>
    
      
    
  );
};