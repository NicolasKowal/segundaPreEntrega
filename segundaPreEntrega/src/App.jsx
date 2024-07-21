import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AcercaDe from "./components/AcercaDe";
import ComoComprar from "./components/ComoComprar";
import NoPage from "./components/NoPage";

import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Content from "./components/main/Content";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="acerca-de" element={<AcercaDe />} />
					<Route path="como-comprar" element={<ComoComprar />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
