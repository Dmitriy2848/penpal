import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import './index.css';
import store from 'app/store.js';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<GeistProvider>
				<CssBaseline />
				<App />
			</GeistProvider>
		</Provider>
	</React.StrictMode>
);
