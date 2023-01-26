import Editor from 'widgets/Editor';
import Sidebar from 'widgets/Sidebar/index.jsx';
import Container from 'shared/ui/atoms/Container/index.jsx';

import 'app/App.css';

function App() {
	return (
		<Container.Flex justify='center'>
			<Sidebar />
			<Editor />
		</Container.Flex>
	);
}

export default App;
