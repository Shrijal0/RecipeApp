import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodItems: [],
  cartItems: [],
  quantity: 100,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setFoodItems: (state, action) => {
      state.foodItems = action.payload;
    },
    addToCart: (state, action) => {
      const itemToAdd = state.foodItems.find(
        (item) => item.id === action.payload
      );

      if (itemToAdd && itemToAdd.name) {
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === itemToAdd.id
        );
        console.log("THISNIS CONSIOE:", existingItemIndex);

        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex].quantity++;
        } else {
          state.cartItems.push({
            name: itemToAdd.name,
            image: itemToAdd.image,
            id: itemToAdd.id,
            quantity: 1,
          });
        }
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === itemIdToRemove
      );

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity--;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
    deleteFromCart: (state, action) => {
      const itemIdDelete = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === itemIdDelete
      );
      state.cartItems[itemIndex].quantity = 1;
      state.cartItems.splice(itemIndex, state.cartItems[itemIndex].quantity);
    },
    updateCartItem: (state, action) => {
      const id = action.payload.id;
      const quantity = action.payload.quantity;

      const itemToUpdate = state.foodItems.find((item) => item.id === id);

      if (itemToUpdate && itemToUpdate.id) {
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === itemToUpdate.id
        );
        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex].quantity = quantity;
        } else {
          return;
        }
      }
    },
  },
});

export const {
  setFoodItems,
  addToCart,
  removeFromCart,
  updateCartItem,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
