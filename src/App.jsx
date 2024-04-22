import Nav from "./components/navBar";
import Home from "./pages/home-page";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Taches from "./pages/taches";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import ListeDesInvités from "./pages/listeDesInvites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/taches" element={<Taches />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/listedesinvités" element={<ListeDesInvités />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
