import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import DHeader from "../components/partials/DHeader";
import Sidebar from "../components/partials/Sidebar";

const MainLayout = () => {
  return (
    <main className="bg-[#EAEAEA] h-screen w-full flex flex-col">
      <DHeader />
      {/* <Navbar /> */}
      <div className="flex size-full">
        <Sidebar />
        <section className="w-full">
          <Outlet />
        </section>
      </div>
      <ScrollRestoration />
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
