import React from "react"
import NotFound from "./error/404";
import ServerError from "./error/500";
import Login from "./pages/Login"
import Register from "./pages/Register"
import DataBase from "./pages/DataBase"
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import DashBoard from "./pages/DashBoard";
import Biens from "./pages/Biens";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <GetStarted /> },
  { path: "/login", element: <Login /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "", element: <DashBoard /> },
      { path: "biens", element: <Biens /> }
    ]
  },
  { path: "/register", element: <Register /> },
  { path: "/database", element: <DataBase /> },
  { path: "/500", element: <ServerError /> },
  { path: "*", element: <NotFound /> }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App