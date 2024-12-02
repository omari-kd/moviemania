import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signup/Signin";
import Mainpage from "./pages/Main/Mainpage";
import MoviePage from "./pages/Movies/MoviePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Mainpage />} /> {/* Default to Mainpage */}
          <Route path="/movies" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
