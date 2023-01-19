import { Grid } from '@geist-ui/react';

import Editor from 'features/Editor/Editor.jsx';
import Sidebar from 'widgets/Sidebar/Sidebar.jsx';

import 'app/App.css';

function App() {
	return (
		<Grid.Container>
			<Grid
				xs={5}
				height='100vh'
				direction='column'
				alignItems='center'
			>
				<Sidebar />
			</Grid>
			<Grid xs={18}>
				<Editor />
			</Grid>
		</Grid.Container>
	);
}

export default App;
