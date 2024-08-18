import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebDevHome from "./Components/WebDev/WebDevHome";
import GameDevHome from "./Components/GameDev/GameDevHome";
import ContactMe from "./Components/ContactMe";
import AboutMe from "./Components/AboutMe";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/web'} element={<WebDevHome/>}></Route>
                <Route path={'/game'} element={<GameDevHome/>}></Route>
                <Route path={'/contact'} element={<ContactMe/>}></Route>
                <Route path={'/about'} element={<AboutMe/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
