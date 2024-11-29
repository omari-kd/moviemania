import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signup/Signin";
import Mainpage from "./pages/Main/Mainpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
