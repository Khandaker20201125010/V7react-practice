import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'
import Counter from './Components/Counter/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Counter />
    </Provider>
   
  </StrictMode>,
)
