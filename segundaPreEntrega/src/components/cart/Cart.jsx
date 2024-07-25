import React, { useState } from "react";
import { ImCart } from "react-icons/im";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [cantidadProductos, setCantidadProductos] = useState(0);
	return (
		<div className="carro">
			<ImCart size="30px" />
			<p>{cantidadProductos}</p>
		</div>
	);
}

export default Cart;
