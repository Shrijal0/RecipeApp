import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodItems: [],
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Storing food list
    setFoodItems: (state, action) => { 
      state.foodItems = action.payload; 
    },
    // Adding to cart
    addToCart: (state, action) => {
      //Finding the food item in list
      const itemToAdd = state.foodItems.find(
        (item) => item.id === action.payload
      );
      // Checking item to add and its name
      if (itemToAdd) {
        //Chenking and returning index of item in cart
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === itemToAdd.id
        );
        console.log("THIS IS CONSIOE:", existingItemIndex);
        //Checking the validity of index
        if (existingItemIndex !== -1) {
          // Increacing the quantity if item exist
          state.cartItems[existingItemIndex].quantity++;
        } else {
          // Adding to cart if the item doesnt exist
          alert(`${itemToAdd.name} added to cart`)
          state.cartItems.push({
            name: itemToAdd.name,
            image: itemToAdd.image,
            id: itemToAdd.id,
            quantity: 1,
          });
        }
      }
    },
    //Subtracting from cart
    subtractFromCart: (state, action) => {
      //Taking the id of the item to remove
      const itemIdToRemove = action.payload;
      //Checking and returning the index of the item
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === itemIdToRemove
      );
      //Chenking the validity of index
      if (itemIndex !== -1) {
        //Checking if the quantity of item is greater than 1
        if (state.cartItems[itemIndex].quantity > 1) {
          //Deacreasing the quantity of item by 1
          state.cartItems[itemIndex].quantity--;
        } else {
          //Removing the item
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
    deleteFromCart: (state, action) => {
      //Taking the id of the item
      const itemIdDelete = action.payload;
      //Finding the index of the item
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === itemIdDelete
      );
      //Setting the quantity of item to 1
      state.cartItems[itemIndex].quantity = 1;
      //Removing the item
      state.cartItems.splice(itemIndex, state.cartItems[itemIndex].quantity);
    },
    //Changing cart quantity
    changingCartQuantity: (state, action) => {
      //Taking id of the item
      const id = action.payload.id;
      //Taking the quantity of the item
      const quantity = action.payload.quantity;
      //Finding the id of the item
      const itemToUpdate = state.foodItems.find((item) => item.id === id);
      //Checking item 
      if (itemToUpdate) {
        //Checking and returning the index of the item
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === itemToUpdate.id
        );
        //Checking the validity of the item
        if (existingItemIndex !== -1) {
          //Changing the quantity of the item
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
  subtractFromCart,
  changingCartQuantity,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
