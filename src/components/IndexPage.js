import React from "react";
import "../styles/IndexPage.css";
import DashBoard from "./DashBoard";
import NavBar from "./NavBar";

export default function IndexPage() {
  return (
    <div className="Index_page">
      <div className="navbar_index_page">
        <NavBar />
      </div>
      <div className="dashboard_index_page">
        <DashBoard />
      </div>
    </div>
  );
}
