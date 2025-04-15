import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import DHeader from "../components/partials/DHeader";
import Sidebar from "../components/partials/Sidebar";

const MainLayout = () => {
  return (
    <main className="h-screen w-full flex gap-5 p-5">
      <Sidebar />
      {/* <Navbar /> */}
      <div className="flex flex-col gap-5 size-full">
        <DHeader />
        <section className="w-full bg-secondary rounded-2xl p-5 h-full overflow-y-auto">
          <Outlet />
        </section>
      </div>
      <ScrollRestoration />
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
