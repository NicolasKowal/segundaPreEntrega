import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
	return (
		<header>
			<div
				id="carouselExampleAutoplaying"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://placehold.co/1920x400"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://placehold.co/1920x450"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://placehold.co/1920x470"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden"></span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden"></span>
				</button>
			</div>
		</header>
	);
}

export default Header;
