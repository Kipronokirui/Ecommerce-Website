import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:[],
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        increment: (state, action) => {
            const item = state.cartItems.find( //Checking if the product already exists in the cart
                (el)=> el.product.id === action.payload.id
            )
            if(item){
                item.qty++
            }else{
                state.cartItems.push({
                    product:action.payload,
                    qty:1,
                })
            }
        },
        decrement: (state, action) => {
            const item = state.cartItems.find( //Checking if the product already exists in the cart
                (el)=> el.product.id === action.payload.id
            )
            if(item){
                item.qty--;
                if(item.qty===0){
                    state.cartItems = state.cartItems.filter(
                        (el)=> el.product.id !== action.payload.id
                    );
                };
            };
        },
        removeItem: (state, action) => {
            const item = state.cartItems.find( //Checking if the product already exists in the cart
                (el)=> el.product.id === action.payload.id
            )
            if(item){
                state.cartItems = state.cartItems.filter(
                    (el)=> el.product.id !== action.payload.id
                );
            }
        }
    }
})

const cartItems = (state) => state.cart.cartItems;
export const totalCartItemsSelector = createSelector([cartItems], (cartItems)=>
    cartItems.reduce((total, curr)=>(total+=curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartItems], (cartItems)=>
    cartItems.reduce((total,curr)=>(total+= curr.qty * curr.product.price), 0)
)

export const productQtyInCartSelector = createSelector([cartItems, (cartItems,productId)=>productId],
    (cartItems,productId)=>cartItems.find((el)=>el.product.id===productId)?.qty
)

export const {increment, decrement, removeItem} = cartSlice.actions;
export default cartSlice.reducer;