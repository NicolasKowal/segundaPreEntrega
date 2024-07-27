import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

import ShopListShare, { listaCarrito } from "../context";

import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<ShopListShare.Provider value={listaCarrito}>
				<NavBar />
				<Outlet />
				<Footer />
			</ShopListShare.Provider>
		</>
	);
}

export default Layout;
