import React, { useState, useContext } from "react";
import { ImCart } from "react-icons/im";
import { ShopListContext } from "../../context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [xButton, setButton] = useState(false);
	const [estilo, setEstilo] = useState({ display: "none" });
	const { listaCarrito } = useContext(ShopListContext);

	const handleClick = () => {
		setEstilo(xButton ? { display: "none" } : { display: "flex" });
		setButton(!xButton);
		console.log(listaCarrito);
	};

	return (
		<>
			<div className="carro" onClick={handleClick}>
				<ImCart size="30px" />
				<p>{listaCarrito.length}</p>
			</div>
			<div style={estilo} className="compra">
				<div className="closeBar">
					<button onClick={handleClick} className="close">
						X
					</button>
				</div>
				<div>
					<ul className="listaS">
						{listaCarrito.map((x) => (
							<li key={x.id}>
								<p>{x.cantidad}</p>
								<p>{x.nombre}</p>
								<p> $ {x.total}</p>
								<button>D</button>
							</li>
						))}
					</ul>
				</div>
				<div className="finalizarCompra">
					<button>Finalizar compra</button>
				</div>
			</div>
		</>
	);
}

export default Cart;
