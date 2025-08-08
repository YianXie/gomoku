import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

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
