import React from "react";
import { Productos } from "../Productos";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";

import "bootstrap/dist/css/bootstrap.min.css";

function ResultadoBusqueda() {
	const { valor } = useParams();
	let productosFiltrados = Productos.filter((e) => e.tags.includes(valor));
	if (productosFiltrados.length === 0)
		return (
			<div className="typeOfError">
				<img src="https://http.dog/498.jpg" alt="not-found" />
			</div>
		);
	return (
		<div className="grid-container">
			{productosFiltrados.map((producto) => (
				<div key={producto.id}>
					<ItemList
						nombre={producto.nombre}
						descripcion={producto.descripcion}
						precio={producto.precio}
						imagen={producto.imagen}
						categoria={producto.categoria}
						stock={producto.stock}
						id={producto.id}
					/>
				</div>
			))}
		</div>
	);
}

export default ResultadoBusqueda;
