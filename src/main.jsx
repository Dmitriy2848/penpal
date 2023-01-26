import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import store from 'app/store.js';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h2>Error in root component</h2>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
