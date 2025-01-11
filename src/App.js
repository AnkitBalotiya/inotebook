import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"; // Import About component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <div className="APP">
      <NoteState>  
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Use 'element' to render components */}
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
