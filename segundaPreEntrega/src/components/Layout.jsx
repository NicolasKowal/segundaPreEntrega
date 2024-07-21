import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
