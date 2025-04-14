import React from "react";
import { Outlet, ScrollRestoration } from "react-router";

const MainLayout = () => {
    return (
        <>
            {/* <Header />
            <Navbar /> */}
            <Outlet />
            <ScrollRestoration />
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
