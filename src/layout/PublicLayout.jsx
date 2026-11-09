import { Outlet } from "react-router"
import Footer from "../component/common/Footer"
import Navbar from "../component/common/Navbar"

const PublicLayout = () => {
    return (
        <div>
            <Navbar />

            <Outlet />

            <Footer />

        </div>
    )
}

export default PublicLayout