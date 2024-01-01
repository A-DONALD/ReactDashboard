import React from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DataBase from "./pages/DataBase"
import NotFound from "./error/404";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import ServerError from "./error/500";

const router = createBrowserRouter([
  { path: "/", element: <DataBase /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
  { path: "/500", element: <ServerError /> }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App