// EXAMPLE FROM
// https://towardsdev.com/setup-and-use-redux-toolkit-with-next-js-begineers-guide-5ebc32eef31e
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const userSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    //Actions
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      if (index >= 0) {
        //the item exists in order; remove it
        newCart.splice(index, 1); //(position, number of item to delete)
      } else {
        console.warn(
          `can't remove item(id: ${action.payload.id}) as its not in order`
        );
      }
      state.items = newCart;
    },

    //some other actions....
  },
});

export const { addToCart, removeFromCart } = userSlice.actions;

//Selectors - this is how we pull information from the global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export default userSlice.reducer;