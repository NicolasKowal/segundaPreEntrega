import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./btncompra.css";

function BtnCompra({ nombre, precio, stock }) {
	const [cantidad, setCantidad] = useState(0);

	const HandleClick = (nombre, cantidad) => {};
	return (
		<>
			<div className="divCompra">
				<button
					className="btn btn-dark"
					onClick={() => {
						cantidad != 0 ? setCantidad(cantidad - 1) : "";
					}}
				>
					-
				</button>
				<p className="d-flex align-items-center">{cantidad}</p>
				<button
					className="btn btn-dark"
					onClick={() => {
						cantidad < stock - 1 ? setCantidad(cantidad + 1) : "";
					}}
				>
					+
				</button>
			</div>
			<button
				className="btn btn-dark"
				onClick={() => {
					HandleClick(nombre, cantidad);
				}}
			>
				Agregar al carrito
			</button>
		</>
	);
}

export default BtnCompra;
