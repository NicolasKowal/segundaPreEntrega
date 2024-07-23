import React from "react";

import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacto() {
	return (
		<div>
			<h3 className="d-flex justify-content-center m-3">
				Contactanos! estamos para ayudarte
			</h3>
			<div className="container-redes">
				<a href="">
					<img
						src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
						alt=""
					/>
				</a>
				<a href="">
					<img
						src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
						alt=""
					/>
				</a>
				<a href="">
					<img
						src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
						alt=""
					/>
				</a>
			</div>
			<form className="d-flex flex-column w-50 mx-auto">
				<div className="row">
					<div className="col">
						<legend className="form-label fw-light">Nombre</legend>
					</div>
					<div className="col">
						<input
							type="first_name"
							name="first_name"
							id=""
							placeholder="Nombre"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<legend className="form-label fw-light">Apellido</legend>
					</div>
					<div className="col">
						<input
							type="last_name"
							name="last_name"
							id=""
							placeholder="Apellido"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<legend className="form-label fw-light">Telefono</legend>
					</div>
					<div className="col">
						<input
							type="phone"
							name="phone"
							id=""
							placeholder=" 011 - 1234 - 5678"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<legend className="form-label fw-light">Mail</legend>
					</div>
					<div className="col">
						<input
							type="email"
							name="email"
							id=""
							placeholder="nombre@mail.com"
						/>
					</div>
				</div>
				<div className="d-flex flex-column">
					<div className="col">
						<legend className="form-label d-flex justify-content-center fw-light">
							Mensaje
						</legend>
					</div>
					<div className="col">
						<textarea
							className="form-control"
							name="text"
							id=""
							placeholder="Escribe tu mensaje aca"
						></textarea>
					</div>
				</div>
				<div className="d-flex justify-content-around m-3">
					<button className="btn btn-primary" type="submit">
						Enviar
					</button>
					<button className="btn btn-primary" type="reset">
						Resetear
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contacto;
