import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
import SidePanel from "../components/SidePanel/SidePanel";
// Pages
import Home from "./Home";
import Profile from "./Profile";
import NoMatch from "./NoMatch";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex">
        <SidePanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
