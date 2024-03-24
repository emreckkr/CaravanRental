import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
