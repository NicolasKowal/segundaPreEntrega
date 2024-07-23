import React from "react";

function AcercaDe() {
	return (
		<div>
			<form action="POST" className="d-flex flex-column w-50 mx-auto">
				<legend>nombre</legend>
				<input type="first_name" name="first_name" id="" />
				<legend>apellido</legend>
				<input type="last_name" name="last_name" id="" />
				<legend>telefono</legend>
				<input type="phone" name="phone" id="" />
				<legend>mail</legend>
				<input type="email" name="email" id="" />
				<legend>mensaje</legend>
				<textarea name="text" id=""></textarea>
				<button type="submit">go</button>
				<button type="reset">reset</button>
			</form>
		</div>
	);
}

export default AcercaDe;
