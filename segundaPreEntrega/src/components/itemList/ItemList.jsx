import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemlist.css";

function ItemList({ nombre, descripcion, precio, imagen }) {
	return (
		<>
			<div className="card">
				{/* <img src={imagen} className="card-img-top" alt={imagen} /> */}
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<p className="card-text">{descripcion}</p>
				</div>
				<h3>${precio}</h3>
			</div>
		</>
	);
}

export default ItemList;
