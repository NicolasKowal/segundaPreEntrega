import React from "react";
import { useParams } from "react-router-dom";

function ResultadoBusqueda() {
	const { valor } = useParams();
	console.log(valor);
	return <>{valor}</>;
}

export default ResultadoBusqueda;
