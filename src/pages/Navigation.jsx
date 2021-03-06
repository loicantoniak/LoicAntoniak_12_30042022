import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
import SidePanel from "../components/SidePanel/SidePanel";
// Pages
import Home from "./Home";
import Profile from "./Profile";
import NoMatch from "./NoMatch";

export default function Navigation() {
  return (
    <HashRouter basename="/">
      <Header />
      <div className="app__wrapper">
        <SidePanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
