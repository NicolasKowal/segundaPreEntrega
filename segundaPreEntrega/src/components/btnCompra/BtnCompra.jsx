import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./btncompra.css";
function BtnCompra({ nombre, precio, stock }) {
	const [cantidad, setCantidad] = useState(0);
	const [total, setTotal] = useState(1);
	return (
		<>
			{" "}
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
			<button
				onClick={() => {
					if (cantidad > 0) {
						setTotal(cantidad * precio);
						console.log(cantidad, nombre, total);
					}
				}}
			>
				Agregar al carrito
			</button>
		</>
	);
}

export default BtnCompra;
