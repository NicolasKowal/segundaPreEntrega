import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./btncompra.css";
function BtnCompra({ stock }) {
	const [cantidad, setCantidad] = useState(0);
	return (
		<div className="divCompra">
			<button
				onClick={() => {
					cantidad != 0 ? setCantidad(cantidad - 1) : "";
				}}
			>
				-
			</button>
			<p>{cantidad}</p>
			<button
				onClick={() => {
					cantidad < stock - 1 ? setCantidad(cantidad + 1) : "";
				}}
			>
				+
			</button>
		</div>
	);
}

export default BtnCompra;
