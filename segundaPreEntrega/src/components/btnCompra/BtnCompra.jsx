import React, { useState, useContext } from "react";
import { ShopListContext } from "../../context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./btncompra.css";

function BtnCompra({ id, nombre, precio, stock }) {
	const [cantidad, setCantidad] = useState(0);
	const { listaCarrito, setListaCarrito } = useContext(ShopListContext);

	const HandleClick = (nombre, cantidad) => {
		if (cantidad !== 0) {
			let buscarEnArray = listaCarrito.findIndex((x) => x.id === id);
			if (buscarEnArray === -1) {
				const total = cantidad * precio;
				const newCartItem = { id, nombre, cantidad, total };
				setListaCarrito([...listaCarrito, newCartItem]);
			} else {
				const actualizarCarro = [...listaCarrito];
				actualizarCarro[buscarEnArray].cantidad += cantidad;
				actualizarCarro[buscarEnArray].total += cantidad * precio;
				setListaCarrito(actualizarCarro);
			}
		}
	};

	return (
		<>
			<div className="divCompra">
				<button
					className="btn btn-dark"
					onClick={() => {
						if (cantidad !== 0) {
							setCantidad(cantidad - 1);
						}
					}}
				>
					-
				</button>
				<p className="d-flex align-items-center">{cantidad}</p>
				<button
					className="btn btn-dark"
					onClick={() => {
						if (cantidad < stock) {
							setCantidad(cantidad + 1);
						}
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
