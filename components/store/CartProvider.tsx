import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state: any, action: any) => {
	if (action.type === 'ADD') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider: React.FC<any> = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item: string) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};

	const removeItemFromCartHandler = (id: string) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
export default CartProvider;
