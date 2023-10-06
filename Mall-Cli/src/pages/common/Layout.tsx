import { Outlet } from "react-router-dom"
import Header from "../static/Header"
import Footer from "../static/Footer"

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout