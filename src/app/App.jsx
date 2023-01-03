import { Provider } from 'react-redux';

import store from './store.js';

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div>PenPal</div>
		</Provider>
	);
}

export default App;
