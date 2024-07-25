import React from "react";
import Header from "../header/Header";
import { Productos } from "../Productos.js";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const p = Productos.filter((e) => e.tags.includes("conejo"));
console.log(p);

function Home() {
	return (
		<>
			<br />
			<Header />
			<div className="container-img">
				<a href="">
					<img
						src="https://img.freepik.com/foto-gratis/disparo-vertical-hermoso-cachorro-labrador-chocolate-pared-blanca_181624-44209.jpg?semt=sph"
						alt="perro"
					/>
				</a>
				<a href="">
					<img
						src="https://img.freepik.com/foto-gratis/closeup-foto-hermoso-gatito-domestico-jengibre-sentado-sobre-superficie-blanca_181624-35913.jpg?semt=sph"
						alt="gato"
					/>
				</a>
				<a href="">
					<img
						src="https://img.freepik.com/vector-gratis/hermoso-colibri-volando-elemento-diseno-pancartas-carteles-folletos-folletos_1262-13457.jpg?semt=sph"
						alt="pajaro"
					/>
				</a>
				<a href="">
					<img
						src="https://img.freepik.com/foto-gratis/lagarto-gecko-naranja-sobre-fondo-blanco_488145-1992.jpg?semt=sph"
						alt=""
					/>
				</a>
				<a href="">
					<img
						src="https://img.freepik.com/foto-gratis/conejo-adorable-fondo-blanco_1232-462.jpg?semt=sph"
						alt=""
					/>
				</a>
			</div>
		</>
	);
}

export default Home;
