import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/counterSlice'
import logger from 'redux-logger'
 const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})

export default store