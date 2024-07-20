import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Content from "./components/main/Content";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Header />
		<NavBar />
		<Content />
		<Footer />
	</>
);
