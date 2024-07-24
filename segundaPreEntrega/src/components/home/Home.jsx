import React from "react";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	return (
		<>
			<h1 className="d-flex justify-content-center m-5">
				Bienvenidos al refugio austral
			</h1>
			<div className="distancia">
				<div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 p-1">
					<div className="col fancy-border-radius d-flex align-items-center justify-content-center">
						<div className="p-3">Row column1</div>
					</div>
					<div className="col">
						<div className="p-3">
							<img
								className="d-flex align-items-center justify-content-end"
								src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186001.jpg?semt=sph"
							/>
						</div>
					</div>
					<div className="col">
						<div className="p-3">
							<img
								className="d-flex align-items-center justify-content-end"
								src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="https://img.freepik.com/foto-gratis/disparo-vertical-curioso-jack-russell-terrier_181624-46001.jpg?semt=sph"
							/>
						</div>
					</div>
					<div className="col fancy-border-radius d-flex align-items-center justify-content-center">
						<div className="p-3">Row column1</div>
					</div>
					<div className="col fancy-border-radius d-flex align-items-center justify-content-center">
						<div className="p-3">Row column1</div>
					</div>
					<div className="col">
						<div className="p-3">
							<img
								className="d-flex align-items-center justify-content-end"
								src="https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194076.jpg?semt=sph"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
