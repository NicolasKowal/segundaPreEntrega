import { createContext } from "react";

export const listaCarrito = [];

const ShopListShare = createContext(listaCarrito);

export default ShopListShare;
