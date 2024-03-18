import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
