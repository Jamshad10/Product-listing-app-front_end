import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        category: []
    },
    reducers: {

        addCategory: (state, action) => {
            state.category.push(action.payload);
        },

        getCategory: (state, action) => {
            state.category = action.payload.map(item => {
                return {
                    id: item._id,
                    category: item.category
                };
            });
        }
    }
})

export const { addCategory, getCategory } = CategorySlice.actions;
export default CategorySlice.reducer;