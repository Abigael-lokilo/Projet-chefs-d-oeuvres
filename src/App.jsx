import Nav from "./components/navBar";
import Home from "./pages/home-page";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Taches from "./pages/taches";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import ListeDesInvités from "./pages/listeDesInvites";
import Salles from "./pages/salles";
import Voir from "./pages/voir";
import Calendrier from "./pages/calendrier";
import Contact from "./pages/contact";
import Decouvrir from "./pages/decouvrir";
import { Children } from "react";

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
          <Route path="/salles" element={<Salles />}></Route>
          <Route path="/voir" element={<Voir />}></Route>
          <Route path="/calendrier" element={<Calendrier />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/decouvrir" element={<Decouvrir />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
