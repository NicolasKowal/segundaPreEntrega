import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImCart } from "react-icons/im";

function Cart() {
	const [cantidadProductos, setCantidadProductos] = useState(0);
	return (
		<>
			<p>{cantidadProductos}</p>
			<ImCart />
		</>
	);
}

export default Cart;
