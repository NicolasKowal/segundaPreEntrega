import React from "react";

import "./comoComprar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ComoComprar() {
	return (
		<div className="contenedor-flechas d-flex align-items-center justify-content-center">
			<p className="col-2 d-flex align-items-center justify-content-center text-center">
				hace tu pedido
			</p>
			<p className="col-2 ">→</p>
			<p className="col-2 d-flex align-items-center justify-content-center text-center">
				envianos el pago por transferencia al alias XXXX-XXXX
			</p>
			<p className="col-2 ">→</p>
			<p className="col-2 d-flex align-items-center justify-content-center text-center">
				coordina por nuestro whatsapp el envio o retiro
			</p>
		</div>
	);
}

export default ComoComprar;
