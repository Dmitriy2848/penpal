import { Grid } from '@geist-ui/react';

import Editor from 'features/../widgets/Editor';
import Sidebar from 'widgets/Sidebar/index.jsx';

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
