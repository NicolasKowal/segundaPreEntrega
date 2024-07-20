import React from "react";
import ItemList from "../itemList/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";
import { Productos } from "../Productos";

function ItemListContainer() {
	return (
		<div className="grid-container">
			{Productos.map((producto) => (
				<div key={producto.id}>
					<ItemList
						nombre={producto.nombre}
						descripcion={producto.descripcion}
						precio={producto.precio}
						imagen={producto.imagen}
						categoria={producto.categoria}
						stock={producto.stock}
					/>
				</div>
			))}
		</div>
	);
}

export default ItemListContainer;
