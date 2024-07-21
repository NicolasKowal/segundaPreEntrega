import React, { useState } from "react";
import { ImCart } from "react-icons/im";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [cantidadProductos, setCantidadProductos] = useState(0);
	return (
		<a className="carro">
			<ImCart size="30px" />
			<p>{cantidadProductos}</p>
		</a>
	);
}

export default Cart;
