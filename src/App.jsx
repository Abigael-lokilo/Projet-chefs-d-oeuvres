import Nav from "./components/navBar";
import Home from "./pages/home-page";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Taches from "./pages/taches";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import ListeDesInvités from "./pages/listeDesInvites";
import Salles from "./pages/salles";
import Voir from "./pages/voir";
import Calendrier from "./pages/calendrier";
import Contact from "./pages/contact";
import Accueil from "./pages/Accueil";
import Baner from "./components/baner";
import Layout from "./pages/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Baner />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/taches",
        element: <Taches />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/invites",
        element: <ListeDesInvités />,
      },
      {
        path: "/salles",
        element: <Salles />,
      },
      {
        path: "/voir",
        element: <Voir />,
      },
      {
        path: "/calendrier",
        element: <Calendrier />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
