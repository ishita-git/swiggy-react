import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
    amount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
     
        
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity++;
      state.amount+=action.payload.price ;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price ,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      else{
        existingItem.quantity++;
        // state.amount+=action.payload.price;
        existingItem.totalPrice = parseInt(existingItem.totalPrice) + parseInt(newItem.price);
      }
    },
    removeItemFromCart(state, action) {

      console.log(action)
      
        const id = action.payload.id;
        const existingItem = state.items.find(item => item.id === id);
   
        state.quantity--;
        state.amount-=action.payload.price ;
        if(existingItem.quantity === 1 )
        {
           state.items = state.items.filter(item => item.id !== id)
        }else{
            existingItem.quantity--;
            existingItem.totalPrice = parseInt(existingItem.totalPrice) - parseInt(existingItem.price);
        }
    },
  },
});

export default cartSlice;
export const cartactions = cartSlice.actions;
