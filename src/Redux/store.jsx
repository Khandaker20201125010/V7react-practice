import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/counterSlice'
import logger from './Middlewares/logger'

 const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //logger
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})

export default store