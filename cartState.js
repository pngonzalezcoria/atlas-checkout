// Refactor: centralize cart state management
// No linked Jira ticket — emerged during checkout form work
// Moves cart state from local component state to a shared context

import { createContext, useContext, useReducer } from 'react';

  const CartContext = createContext(null);

function cartReducer(state, action) {
    switch (action.type) {
case 'ADD_ITEM': return { ...state, items: [...state.items, action.item] };
case 'REMOVE_ITEM': return { ...state, items: state.items.filter(i => i.id !== action.id) };
case 'CLEAR': return { items: [] };
default: return state;
    }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
