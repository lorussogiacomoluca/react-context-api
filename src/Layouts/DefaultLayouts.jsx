import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayouts = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-md-9">
              <Outlet />
            </div>
            <div className="col-12 col-md-3">Sidebar</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DefaultLayouts;
