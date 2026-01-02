import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoanRequest from "./pages/LoanRequest";
import CreditDecision from "./pages/CreditDecision";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoanRequest />} />
        <Route path="/decision" element={<CreditDecision />} />
      </Routes>
    </BrowserRouter>
  );
}
