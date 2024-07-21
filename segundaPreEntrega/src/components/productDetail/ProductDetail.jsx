import React from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../Productos";

import "bootstrap/dist/css/bootstrap.min.css";
import "./productDetail.css";

function ProductDetail() {
	const { id } = useParams();

	const producto = Productos.find((elemento) => elemento.id === parseInt(id));

	if (!producto) {
		return (
			<div className="typeOfError">
				<img src="https://http.dog/204.jpg" alt="https://http.dog/204.jpg" />
			</div>
		);
	}

	return (
		<div className="container-producto">
			<div className="detalleProducto">
				<h2>{producto.nombre}</h2>
				<img src={producto.imagen} alt={producto.imagen} />
				<h2>${producto.precio}</h2>
				<p>{producto.descripcion}</p>
			</div>
		</div>
	);
}

export default ProductDetail;
