import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { Productos } from "../Productos";

import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
	let categorias = Productos.map((p) => p.categoria);
	let categoriasFitradas = ["Todos"];
	categorias.forEach((categoria) => {
		if (!categoriasFitradas.includes(categoria)) {
			categoriasFitradas.push(categoria);
		}
	});
	return (
		<>
			<nav className="position-sticky navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<Link to={"/"}>
						<img
							className="imgIco"
							src="https://cdn-icons-png.flaticon.com/128/16779/16779323.png"
							alt="img"
						/>
					</Link>
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
							<li className="nav-item">
								<Cart />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
