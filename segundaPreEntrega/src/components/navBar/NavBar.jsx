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
		<div className="navegacion position-sticky">
			<div className="d-flex align-items-center justify-content-between text-center w-75 mx-auto">
				<img
					className="imgIco"
					src="https://cdn-icons-png.flaticon.com/128/16779/16779323.png"
					alt="img"
				/>
				<div className="buscador d-flex align-items-center justify-content-around text-center w-50 mx-auto">
					<input type="text" />
					<button className="btn btn-primary">buscar</button>
				</div>
				<div>
					<Cart />
				</div>
			</div>
			<nav className="navbar navbar-expand-lg">
				<Link to={"/"}></Link>
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
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;

/*
			<nav className="position-sticky navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<Link to={"/"}>
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
						</ul>
					</div>
				</div>
			</nav>
*/
