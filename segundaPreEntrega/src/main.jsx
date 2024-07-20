import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Content from "./components/main/Content";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Header />
		<NavBar />
		<ItemListContainer />
		<Content />
		<Footer />
	</>
);
