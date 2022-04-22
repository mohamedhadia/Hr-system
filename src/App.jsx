import "./App.css";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Test from "./Dashboard/Test";
import Admin from "./Dashboard/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
