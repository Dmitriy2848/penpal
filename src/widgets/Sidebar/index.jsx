import { Spacer } from '@geist-ui/react';

import Header from 'widgets/Sidebar/ui/Header';
import FileTree from 'features/FileTree';

const Sidebar = () => {
	return (
		<>
			<Header />
			<Spacer h={0.5} />
			<FileTree />
		</>
	);
};

export default Sidebar;
