import React from 'react';
import { Tree } from '@geist-ui/react';

const FileTree = ({ data }) => {
	return (
		<React.Fragment>
			<Tree value={data} />
		</React.Fragment>
	);
};

export default FileTree;
