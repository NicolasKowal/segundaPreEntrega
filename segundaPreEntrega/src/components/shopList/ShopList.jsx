import React, { useState } from "react";

import "./shopList.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ShopList() {
	const [estilo, setEstilo] = useState({ display: "none" });
	const handleClick = () => {
		setEstilo({ display: "none" });
	};
	return (
		<div style={estilo} className="compra">
			<div className="closeBar">
				<button onClick={handleClick} className="close">
					X
				</button>
			</div>
		</div>
	);
}

export default ShopList;
