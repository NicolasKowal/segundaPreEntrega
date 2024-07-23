import React from "react";

import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacto() {
	return (
		<div>
			<h3 className="d-flex justify-content-center m-3">nuestras redes</h3>
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
			<h3 className="d-flex justify-content-center m-3">
				envianos un mensaje y nos pondremos en contacto con vos
			</h3>
			<form className="formulario">
				<div className="fila">
					<legend className="form-label fw-light">Nombre</legend>
					<input
						type="first_name"
						name="first_name"
						id=""
						placeholder=" Nombre"
					/>
				</div>
				<div className="fila">
					<legend className="form-label fw-light">Apellido</legend>
					<input
						type="last_name"
						name="last_name"
						id=""
						placeholder=" Apellido"
					/>
				</div>
				<div className="fila">
					<legend className="form-label fw-light">Telefono</legend>
					<input
						type="phone"
						name="phone"
						id=""
						placeholder=" 011 - 1234 - 5678"
					/>
				</div>
				<div className="fila">
					<legend className="form-label fw-light">Mail</legend>
					<input
						type="email"
						name="email"
						id=""
						placeholder=" nombre@mail.com"
					/>
				</div>
				<div className="mensaje">
					<legend className="form-label fw-light">Mensaje</legend>
					<textarea
						className="form-control"
						name="text"
						id=""
						placeholder="Escribe tu mensaje aca"
					></textarea>
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
