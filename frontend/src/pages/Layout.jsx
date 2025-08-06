import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <main className="h-full">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
