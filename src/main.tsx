import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Routes from './routes/Route.tsx'

import {
  RouterProvider,
} from "react-router-dom";

import { store } from "./redux/store.ts"

import "@fontsource/montserrat";
import '@fontsource/montserrat/700.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
  </React.StrictMode>,
)
