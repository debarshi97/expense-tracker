import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
