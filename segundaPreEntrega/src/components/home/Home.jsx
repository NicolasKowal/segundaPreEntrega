import React, { useState } from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	return (
		<>
			<br />
			<Header />
			<div className="container-img">
				<Link to={`/perro`}>
					<img
						src="https://img.freepik.com/foto-gratis/disparo-vertical-hermoso-cachorro-labrador-chocolate-pared-blanca_181624-44209.jpg?semt=sph"
						alt="perro"
					/>
				</Link>
				<Link to={`/gato`}>
					<img
						src="https://img.freepik.com/foto-gratis/closeup-foto-hermoso-gatito-domestico-jengibre-sentado-sobre-superficie-blanca_181624-35913.jpg?semt=sph"
						alt="gato"
					/>
				</Link>
				<Link to={`/pájaros`}>
					<img
						src="https://img.freepik.com/vector-gratis/hermoso-colibri-volando-elemento-diseno-pancartas-carteles-folletos-folletos_1262-13457.jpg?semt=sph"
						alt="pajaro"
					/>
				</Link>
				<Link to={`/reptiles`}>
					<img
						src="https://img.freepik.com/foto-gratis/lagarto-gecko-naranja-sobre-fondo-blanco_488145-1992.jpg?semt=sph"
						alt="reptil"
					/>
				</Link>
				<Link to={`/conejo`}>
					<img
						src="https://img.freepik.com/foto-gratis/conejo-adorable-fondo-blanco_1232-462.jpg?semt=sph"
						alt="conejo"
					/>
				</Link>
			</div>
		</>
	);
}

export default Home;
