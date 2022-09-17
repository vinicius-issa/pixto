import React from "react"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "./App.scss"
import Routers from "./Router"
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={Routers} />
    </>
  )
}
