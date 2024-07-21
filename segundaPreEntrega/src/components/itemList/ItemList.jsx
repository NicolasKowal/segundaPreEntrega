import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";
import BtnCompra from "../btnCompra/BtnCompra";
import { Link } from "react-router-dom";

function ItemList({ id, nombre, precio, imagen, stock }) {
	return (
		<>
			<div className="card">
				<Link to={`producto/${id}`}>
					<img className="prod-img" src={imagen} alt={imagen} />
				</Link>
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
