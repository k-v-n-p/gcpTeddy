import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Cloud from "./components/Cloud";
import Login from "./components/login";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/home" element={<Cloud />} />
    <Route path="/" element={<Login />} />
    </Routes>
    </Router>
  );
}

export default App;
