import React, { useEffect, useState } from "react";
import { ImCart } from "react-icons/im";
import { productosComprados } from "../ListaCompra";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [cantidadProductos, setCantidadProductos] = useState(0);
	const HandleClick = () => {
		console.log(productosComprados);
	};
	return (
		<div
			className="carro"
			onClick={() => {
				HandleClick();
			}}
		>
			<ImCart size="30px" />
			<p>{cantidadProductos}</p>
		</div>
	);
}

export default Cart;
