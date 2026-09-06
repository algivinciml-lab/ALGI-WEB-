import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Tulisan from "./pages/Tulisan";
import Sosmed from "./pages/Sosmed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/tulisan" element={<Tulisan />} />
        <Route path="/sosmed" element={<Sosmed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;