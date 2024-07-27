import React, { useState } from "react";
import { ImCart } from "react-icons/im";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [xButton, setButton] = useState(false);
	const [estilo, setEstilo] = useState({ display: "none" });

	const handleClick = () => {
		xButton == false
			? setEstilo({ display: "flex" })
			: setEstilo({ display: "none" });
		setButton(!xButton);
	};
	return (
		<>
			<div className="carro" onClick={handleClick}>
				<ImCart size="30px" />
				<p>0</p>
			</div>
			<div style={estilo} className="compra">
				<div className="closeBar">
					<button onClick={handleClick} className="close">
						X
					</button>
				</div>
			</div>
		</>
	);
}

export default Cart;
