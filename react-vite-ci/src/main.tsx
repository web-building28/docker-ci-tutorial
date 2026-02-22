import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Homepage from './pages/Homepage.tsx'
import Project from './pages/Project.tsx'
import Regions from './pages/Regions.tsx'
import Tracking from './pages/Tracking.tsx'
import Sources from './pages/Sources.tsx'
import Industry from './pages/Industry.tsx'

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Regions" element={<Regions />} />
      <Route path="/Tracking" element={<Tracking />} />
      <Route path="/Sources" element={<Sources />} />
      <Route path="/Industry" element={<Industry />} />
    </Routes>
  </BrowserRouter>,
);