import React from "react";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	return (
		<>
			<h1 className="d-flex justify-content-center">
				Bienvenidos al refugio austral
			</h1>
			<div className="container text-center">
				<div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
					<div className="col fancy-border-radius2">
						<div className="p-3">Row column1</div>
					</div>
					<div className="col">
						<div className="p-3">
							<img
								src="https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186001.jpg?semt=sph"
								alt="https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186001.jpg?semt=sph"
							/>
						</div>
					</div>
					<div className="col">
						<div className="p-3">
							<img
								src="https://img.freepik.com/foto-gratis/disparo-vertical-curioso-jack-russell-terrier_181624-46001.jpg?semt=sph"
								alt="https://img.freepik.com/foto-gratis/disparo-vertical-curioso-jack-russell-terrier_181624-46001.jpg?semt=sph"
							/>
						</div>
					</div>
					<div className="col fancy-border-radius">
						<div className="p-3">Row column1</div>
					</div>
					<div className="col fancy-border-radius2">
						<div className="p-3">Row column1</div>
					</div>
					<div className="col">
						<div className="p-3">
							<img
								src="https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194076.jpg?semt=sph"
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
