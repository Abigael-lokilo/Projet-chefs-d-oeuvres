import Nav from "./components/navBar";
import Home from "./pages/home-page";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Taches from "./pages/taches";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/taches" element={<Taches />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
