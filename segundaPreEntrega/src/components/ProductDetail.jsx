import React from "react";
import { useParams } from "react-router-dom";
import { Productos } from "./Productos";

function ProductDetail() {
	const { id } = useParams();

	const producto = Productos.find((elemento) => elemento.id === parseInt(id));

	if (!producto) {
		return (
			<img src="https://http.dog/204.jpg" alt="https://http.dog/204.jpg" />
		);
	}

	return (
		<>
			<div>
				<h1>{producto.nombre}</h1>
				<img src={producto.imagen} alt={producto.imagen} />
				<h2>${producto.precio}</h2>
				<p>{producto.descripcion}</p>
			</div>
		</>
	);
}

export default ProductDetail;
