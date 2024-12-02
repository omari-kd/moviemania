import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signup/Signin";
import Mainpage from "./pages/Main/Mainpage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetails from "./pages/Movies/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
