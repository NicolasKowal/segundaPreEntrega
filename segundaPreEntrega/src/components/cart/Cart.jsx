import React, { useEffect, useState } from "react";
import { ImCart } from "react-icons/im";
import { productosComprados } from "../ListaCompra";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [cantidadProductos, setCantidadProductos] = useState(0);

	useEffect(() => {
		let total = productosComprados.reduce(
			(acum, producto) => acum + producto.cantidad,
			0
		);
		setCantidadProductos(total);
	}, [cantidadProductos]);

	const handleClick = () => {
		console.log(productosComprados);
	};

	return (
		<div className="carro" onClick={handleClick}>
			<ImCart size="30px" />
			<p>{cantidadProductos}</p>
		</div>
	);
}

export default Cart;
