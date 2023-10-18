const { createSlice } = require("@reduxjs/toolkit");

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    },
    reducers: {

        addItem: (state, action) => {
            state.items.push(action.payload)
        },

        getItem: (state, action) => {
            state.items = action.payload.map((items => {
                return {
                    id: items._id,
                    category: items.category,
                    products: items.products,
                    productCategory: items.productCategory,
                    item: items.item
                }
            }))
        }
    }
});

export const { addItem, getItem } = itemsSlice.actions;
export default itemsSlice.reducer;