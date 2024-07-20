import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";
import BtnCompra from "../btnCompra/BtnCompra";

function ItemList({ nombre, descripcion, precio, imagen, stock }) {
	return (
		<>
			<div className="card">
				{/* <img src={imagen} className="card-img-top" alt={imagen} /> */}
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<p className="card-text">{descripcion}</p>
				</div>
				<h3>${precio}</h3>
				<BtnCompra stock={stock} />
			</div>
		</>
	);
}

export default ItemList;
