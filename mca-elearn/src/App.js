import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import UserDashboard from "./user_dashboard/UserDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
