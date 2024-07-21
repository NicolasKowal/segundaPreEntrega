import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AcercaDe from "./components/AcercaDe";
import ComoComprar from "./components/ComoComprar";
import NoPage from "./components/NoPage";

import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="acerca-de" element={<AcercaDe />} />
					<Route path="como-comprar" element={<ComoComprar />} />
					{/* <Route path="todos-los-productos" element={<ItemListContainer />} /> */}
					<Route path="productos/:categoria" element={<ItemListContainer />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
