import React from "react";
import { Link } from "react-router-dom";
import BtnCompra from "../btnCompra/BtnCompra";

import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";

function ItemList({ id, nombre, precio, imagen, stock }) {
	return (
		<>
			<div className="card">
				<Link className="img-contenedor" to={`producto/${id}`}>
					<img className="prod-img" src={imagen} alt={imagen} />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<p className="precio">${precio}</p>
				</div>
				<BtnCompra id={id} stock={stock} nombre={nombre} precio={precio} />
			</div>
		</>
	);
}

export default ItemList;
