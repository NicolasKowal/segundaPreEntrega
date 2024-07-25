import React from "react";
import ItemList from "../itemList/ItemList";
import { Productos } from "../Productos";
import { useParams } from "react-router-dom";

import "./itemlist.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer() {
	const { animal } = useParams();
	const productosFiltrados = Productos.filter((e) => e.tags.includes(animal));
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
