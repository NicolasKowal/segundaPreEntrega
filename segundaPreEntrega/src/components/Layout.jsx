import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import ShopList from "./shopList/ShopList";

import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<NavBar />
			<ShopList />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
