import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import Navigationbar from "./components/Navigationbar/Navigationbar";



function App() {
    return (
      <div>
        {/* add the route here. */}

        <div className="App">
                <Navigationbar />
                <div className="body">
                    <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/inventory" element={<Inventory role="inventory"/>}/>
                            <Route exact path="/search" element={<Inventory role="search"/>}/>
                            <Route exact path="/about" element={<About />}/>
                    </Routes>
                </div>
            </div>
      </div>
    );
  }
  
  export default App;