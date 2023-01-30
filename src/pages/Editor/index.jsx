import Editor from 'features/Editor/index.jsx';
import Sidebar from 'widgets/Sidebar/index.jsx';
import Content from 'widgets/Content/index.jsx';
import Container from 'shared/ui/atoms/Container/index.jsx';

const Template = () => {
	return (
		<Container.Flex justify='center'>
			<Sidebar />
			<Content>
				<Editor />
			</Content>
		</Container.Flex>
	);
};

export { Template as Editor };
