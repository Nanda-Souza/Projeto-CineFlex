import Screen from "./pages/Screen";
import Session from "./pages/Session";
import {BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    
    
    </BrowserRouter>
    
      
    
  );
};