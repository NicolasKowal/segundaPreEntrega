import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Productos } from "../Productos";
import ItemList from "../itemList/ItemList";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	let productosMenorStock = Productos.filter((producto) => producto.stock < 20);
	productosMenorStock = productosMenorStock.slice(
		5,
		productosMenorStock.length - 1
	);
	return (
		<>
			<Header />
			<div className="container-separador">
				<h1 className="separador">Busca todo lo que tu mascota necesite</h1>
			</div>
			<div className="container-img">
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/perro`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/disparo-vertical-hermoso-cachorro-labrador-chocolate-pared-blanca_181624-44209.jpg?semt=sph"
						alt="perro"
					/>
					<h5 className="p-3">Perros</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/gato`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/closeup-foto-hermoso-gatito-domestico-jengibre-sentado-sobre-superficie-blanca_181624-35913.jpg?semt=sph"
						alt="gato"
					/>
					<h5 className="p-3">Gatos</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/pájaros`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/vector-gratis/hermoso-colibri-volando-elemento-diseno-pancartas-carteles-folletos-folletos_1262-13457.jpg?semt=sph"
						alt="pajaro"
					/>
					<h5 className="p-3">Aves</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/reptiles`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/lagarto-gecko-naranja-sobre-fondo-blanco_488145-1992.jpg?semt=sph"
						alt="reptil"
					/>
					<h5 className="p-3">Reptiles</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/conejo`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/conejo-adorable-fondo-blanco_1232-462.jpg?semt=sph"
						alt="conejo"
					/>
					<h5 className="p-3">Conejo</h5>
				</Link>
			</div>
			<div className="container-separador">
				<h2 className="separador">Lo mas vendido</h2>
			</div>
			<div className="d-flex align-items-center justify-content-around masVendido">
				{productosMenorStock.map((producto) => (
					<ItemList
						key={producto.id}
						nombre={producto.nombre}
						precio={producto.precio}
						stock={producto.stock}
						id={producto.id}
						imagen={producto.imagen}
					/>
				))}
			</div>
		</>
	);
}

export default Home;
