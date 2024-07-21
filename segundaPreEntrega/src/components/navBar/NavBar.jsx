import React from "react";
import { ImCart } from "react-icons/im";
import Cart from "../cart/Cart";
import "./navbar.css";
import { Productos } from "../Productos";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<Link to={"/"}>
						<img
							className="imgIco"
							src="./img/tienda-de-animales.png"
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
								<Link to={"acerca-de"}>Acerca De</Link>
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
