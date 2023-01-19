import React from 'react';
import { Spacer } from '@geist-ui/react';

import Header from 'widgets/Sidebar/Header.jsx';
import SearchBar from 'widgets/Sidebar/Search.jsx';
import FileTree from 'features/FileTree';

const Sidebar = () => {
	return (
		<React.Fragment>
			<Spacer />
			<SearchBar />
			<Spacer h={0.5} />
			<Header />
			<Spacer h={0.5} />
			<FileTree />
		</React.Fragment>
	);
};

export default Sidebar;
