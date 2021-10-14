import { configureStore } from '@reduxjs/toolkit'
import themesReducer from './themesSlice'

export const store = configureStore({
    reducer: {
        themesReducer
    },
})