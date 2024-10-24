import { createSlice } from '@reduxjs/toolkit';

export const TeamSlice = createSlice({
    name: 'teamName',
    initialState: {
        value: 'all',
      },
    reducers: {
        
        toggleTeam: (state, action)=>{
            state.value = action.payload;

        }
    }
})

export const {toggleTeam} = TeamSlice.actions;

export default TeamSlice.reducer;
