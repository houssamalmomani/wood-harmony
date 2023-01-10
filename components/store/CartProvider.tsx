import { useReducer } from 'react';

import CartContext from './cart-context';
import { typeDetails } from '../products/ProductList';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state: any, action: any) => {
	if (action.type === 'ADD') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount = state.totalAmount + action.item.price;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex(
			(item: typeDetails) => item.id === action.id
		);
		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		updatedItems = state.items.filter(
			(item: typeDetails) => item.id !== action.id
		);

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
};
const CartProvider: React.FC<any> = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item: any) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};

	const removeItemFromCartHandler = (id: string) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};
	const cartContext = {
		items: cartState?.items,
		totalAmount: cartState?.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
export default CartProvider;
