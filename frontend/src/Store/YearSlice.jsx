
import { createSlice } from '@reduxjs/toolkit';


export const YearSlice = createSlice({
    name: 'year',
    initialState: {
        value: '2024',
      },
    reducers: {
        
        toggleYear: (state, action)=>{
            state.value = action.payload;

        }
    }
})

export const {toggleYear} = YearSlice.actions;

export default YearSlice.reducer;

