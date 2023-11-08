import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import TopNav from "./top-nav"
import Footer from "./footer"

function MainLayout() {
    return (
        <div className="wrapper" style={{ minHeight: '100vh' }}>
            <Sidebar />
            <div className="main">
                <TopNav />
                <main className="content">
                    <div className="container-fluid p-0">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout