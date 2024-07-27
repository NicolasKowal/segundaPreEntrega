import React, { createContext, useState } from "react";

export const ShopListContext = createContext();

export const ShopListProvider = ({ children }) => {
	const [listaCarrito, setListaCarrito] = useState([]);

	return (
		<ShopListContext.Provider value={{ listaCarrito, setListaCarrito }}>
			{children}
		</ShopListContext.Provider>
	);
};
