import React from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DataBase from "./pages/DataBase"
import NotFound from "./error/NotFound";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <DataBase /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
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