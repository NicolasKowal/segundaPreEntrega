import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";
import BtnCompra from "../btnCompra/BtnCompra";

function ItemList({ nombre, descripcion, precio, imagen, stock }) {
	return (
		<>
			<div className="card">
				<img
					src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
					alt={imagen}
				/>
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<p className="precio">${precio}</p>
				</div>
				<BtnCompra stock={stock} nombre={nombre} precio={precio} />
			</div>
		</>
	);
}

export default ItemList;
