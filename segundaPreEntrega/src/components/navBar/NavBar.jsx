import React from "react";
import "./navbar.css";
import { Productos } from "../Productos";

function NavBar() {
	let categorias = Productos.map((p) => p.categoria);
	let categoriasFitradas = [];
	categorias.forEach((categoria) => {
		if (!categoriasFitradas.includes(categoria)) {
			categoriasFitradas.push(categoria);
		}
	});
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
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
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Acerca de
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Como comprar
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									productos
								</a>
								<ul className="dropdown-menu">
									{categoriasFitradas.map((categoria) => (
										<li key={categoria}>
											<a className="dropdown-item" href="#">
												{categoria}
											</a>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
