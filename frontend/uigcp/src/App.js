import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Cloud from "./components/Cloud";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Cloud />} />
    </Routes>
    </Router>
  );
}

export default App;
