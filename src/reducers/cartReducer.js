// logica que estaba en cartProvider.jsx
// este es cart.js dentro de folder reducer desde src

//export const cartInitialState = []
export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};
// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayLoad } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayLoad;
      const productInCartIndex = state.findIndex((item) => item.id == id);

      if (productInCartIndex >= 0) {
        // 1. una forma seria de utilizar structuredClone
        // forma mas legible
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState)
        return newState;
      }
      const newState = [
        ...state,
        {
          ...actionPayLoad, // product
          quantity: 1,
        }
      ]
      updateLocalStorage(newState)
      return newState
        // 2. usando map , forma facil
        //   const newState = state.map(item=>{
        //     if(item.id===id){
        //         return {
        //             ...item,
        //             quantity: item.quantity+1
        //         }
        //     }
        //     return item
        // })
        
        // 3. usando el spread operator y slice
        // 3. usando el spread operator y slice, forma mas rapida, optima
        // const newState = [
        //     ...state.slice(0, productInCartIndex),
        //     {...state[productInCartIndex], quantity: state[productInCartIndex].quantity+1},
        //     ...state.sl  ice(productInCartIndex+1)
        // ]
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayLoad;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]) 
      return [] //cartInitialState;
    }
  }
  return state;
};
