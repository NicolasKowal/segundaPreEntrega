import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { Productos } from "../Productos";

import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
	const busqueda = useRef(null);
	const [valor, setValor] = useState("");
	let categorias = Productos.map((p) => p.categoria);
	let categoriasFitradas = ["Todos"];
	categorias.forEach((categoria) => {
		if (!categoriasFitradas.includes(categoria)) {
			categoriasFitradas.push(categoria);
		}
	});
	const handleClick = () => {
		setValor(busqueda.current.value);
	};
	return (
		<div className="navegacion position-sticky">
			<nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto flex-d flex-column">
				<div className="row w-50">
					<div className="d-flex align-items-center justify-content-around text-center mx-auto">
						<Link to={"/"}>
							<img
								className="imgIco"
								src="https://cdn-icons-png.flaticon.com/128/16779/16779323.png"
								alt="img"
							/>
						</Link>
						<div className="buscador d-flex align-items-center justify-content-center mx-auto">
							<input onChange={handleClick} ref={busqueda} type="text" />
							<Link to={`/busqueda/${valor}`}>
								<button className="btn btn-sm btn-outline-secondary">
									Buscar
								</button>
							</Link>
						</div>
						<div>
							<Cart />
						</div>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
				</div>
				<div className="row w-50">
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to={"/"}>Home</Link>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Productos
								</a>
								<ul className="dropdown-menu">
									{categoriasFitradas.map((categoria) => (
										<li key={categoria}>
											<Link
												className="dropdown-item"
												to={`productos/${categoria}`}
											>
												{categoria}
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li className="nav-item">
								<Link to={"como-comprar"}>Como comprar</Link>
							</li>
							<li className="nav-item">
								<Link to={"contacto"}>Contacto</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
