import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Contacto from "./components/contacto/Contacto";
import ComoComprar from "./components/comoComprar/ComoComprar";
import NoPage from "./components/noPage/NoPage";
import ProductDetail from "./components/productDetail/ProductDetail";

import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemListContainerAnimal from "./components/itemListContainerAnimal/ItemListContainerAnimal";
import ResultadoBusqueda from "./components/resultadoBusqueda/ResultadoBusqueda";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="contacto" element={<Contacto />} />
					<Route path="como-comprar" element={<ComoComprar />} />
					<Route path="productos/:categoria" element={<ItemListContainer />} />
					<Route
						path="productos/:categoria/producto/:id"
						element={<ProductDetail />}
					/>
					<Route path=":animal/" element={<ItemListContainerAnimal />} />
					<Route path=":animal/producto/:id" element={<ProductDetail />} />
					<Route path="busqueda/:valor" element={<ResultadoBusqueda />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
