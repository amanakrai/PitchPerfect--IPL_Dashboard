import { configureStore } from '@reduxjs/toolkit'
import teamReducer from './TeamSlice.jsx'
import yearReducer from './YearSlice.jsx'

export default configureStore({
  reducer: {
    year : yearReducer,
    teamName : teamReducer,
  },
})