export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };

    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((q) =>
          q.id === action.payload.id ? (q.qty = action.payload.qty) : q.qty
        ),
      };
    case "UPDATE_TOTAL":
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};
// export const totalReducer = (state, action) => {
//   switch(action.type){
//     case "UPDATE_TOTAL":
//       return { total: action.payload };
//     default:
//       return state
//   }
// }

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};
