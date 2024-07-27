import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

import { ShopListProvider } from "../context";

import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<ShopListProvider>
				<NavBar />
				<Outlet />
				<Footer />
			</ShopListProvider>
		</>
	);
}

export default Layout;
