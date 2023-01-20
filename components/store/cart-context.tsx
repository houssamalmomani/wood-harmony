import React from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item: any) => {},
	removeItem: (id: string) => {},
	clearCart: () => {},
});

export default CartContext;
