import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Ap from './Ap'
export default function BigApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ap />}>
            <Route index element={<Ap />} />
            <Route path="app" element={<App />} />
            <Route path="Ap" element={<Ap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }