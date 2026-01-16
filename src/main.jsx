import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux provider
import { RouterProvider } from 'react-router-dom'; // React Router
import store from './redux/store';
import router from './App'; // Router defined in App.jsx
import './assets/styles.css'; // Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)