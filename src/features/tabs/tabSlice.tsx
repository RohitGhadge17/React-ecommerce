import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', name: 'Clothing' },
    { id: '2', name: 'Toys' },
]

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        addTab: (state, action) => {
            state.push(action.payload)
        },
       
        deleteTab: (state, action) => {
            const { id } = action.payload;
            const existingTab = state.find(tab => tab.id === id);
            if (existingTab) {
                return state.filter(tab => tab.id !== id);
            }
        }
    }
})

export const { addTab, editTab, deleteTab } = tabSlice.actions;
export default tabSlice.reducer;