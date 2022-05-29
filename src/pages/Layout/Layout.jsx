import { Outlet } from "react-router"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import Nav from "../Nav/Nav"

export const Layout = () => {

    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}