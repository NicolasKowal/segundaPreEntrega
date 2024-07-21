import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImCart } from "react-icons/im";
import "./cart.css";

function Cart() {
	const [cantidadProductos, setCantidadProductos] = useState(0);
	return (
		<li className="carro">
			<ImCart size="30px" />
			<p>{cantidadProductos}</p>
		</li>
	);
}

export default Cart;
