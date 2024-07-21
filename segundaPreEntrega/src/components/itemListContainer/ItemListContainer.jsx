import React from "react";
import ItemList from "../itemList/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";
import { Productos } from "../Productos";
import { useParams } from "react-router-dom";

function ItemListContainer() {
	const { categoria } = useParams();
	let productosFiltrados = [];
	if (categoria != "Todos") {
		productosFiltrados = Productos.filter(
			(prod) => prod.categoria === categoria
		);
	} else {
		productosFiltrados = Productos;
	}
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

export default ItemListContainer;
