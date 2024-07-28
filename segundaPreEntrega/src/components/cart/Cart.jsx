import React, { useState, useContext } from "react";

import { ImCart } from "react-icons/im";
import { ShopListContext } from "../../context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
	const [xButton, setButton] = useState(false);
	const [estilo, setEstilo] = useState({ display: "none" });
	const { listaCarrito, setListaCarrito } = useContext(ShopListContext);

	const handleClick = () => {
		setEstilo(xButton ? { display: "none" } : { display: "flex" });
		setButton(!xButton);
	};

	const deleteHandleClick = (id) => {
		setListaCarrito(listaCarrito.filter((elemento) => elemento.id !== id));
	};

	return (
		<>
			<div className="carro" onClick={handleClick}>
				<ImCart size="30px" />
				<p>{listaCarrito.length}</p>
			</div>
			<div style={estilo} className="compra">
				<div className="closeBar">
					<button className="btn btn-dark" onClick={handleClick}>
						X
					</button>
				</div>
				<div>
					<ul className="listaS d-flex align-items-center justify-content-center flex-column">
						{listaCarrito.map((elemento) => (
							<li
								className="row-12 d-flex align-items-center justify-content-center"
								key={elemento.id}
							>
								<p className="col-1">{elemento.cantidad}</p>
								<p className="col-6">{elemento.nombre}</p>
								<p className="col-3">$ {elemento.total}</p>
								<button
									className="col-2 btn btn-dark d-flex align-items-center justify-content-center"
									onClick={() => {
										deleteHandleClick(elemento.id);
									}}
								>
									&#128465;
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="finalizarCompra">
					{listaCarrito.length === 0 ? (
						<button disabled>Finalizar compra</button>
					) : (
						<button className="btn btn-dark">Finalizar compra</button>
					)}
				</div>
			</div>
		</>
	);
}

export default Cart;
