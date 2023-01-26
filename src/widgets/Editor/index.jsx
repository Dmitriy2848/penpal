import { useDispatch, useSelector } from 'react-redux';
import { useEditor, EditorContent } from '@tiptap/react';

import toolbarExtensions from 'widgets/Editor/config/extensions.js';
import { updateFile } from 'features/FileTree/model/fileTreeSlice.js';
import Toolbar from 'entities/Toolbar';
import Container from 'shared/ui/atoms/Container/index.jsx';

import 'widgets/Editor/ui/Editor.css';
import Header from 'widgets/Editor/ui/index.jsx';

import Empty from 'widgets/Editor/ui/Empty.jsx';
import Content from 'widgets/Editor/ui/Content.jsx';

const template = {
	type: 'doc',
	content: [
		{
			type: 'heading',
			attrs: {
				level: 2,
				textAlign: 'center'
			},
			content: [
				{
					type: 'text',
					text: 'This is a template'
				}
			]
		}
	]
};

// todo оптимизировать рендеры
const Editor = () => {
	const dispatch = useDispatch();
	const { current: id, files } = useSelector((state) => state.fileTree);
	const content = files.byId[id]?.content;

	// todo запомнить последние аргументы
	let block = true;
	function interval(func, delay) {
		if (block) {
			block = false;
			setTimeout(() => {
				block = true;
				func();
			}, delay);
		}
	}

	const editor = useEditor(
		{
			extensions: toolbarExtensions,
			injectCSS: false,
			content: '',
			autofocus: 'end',
			onCreate({ editor }) {
				content && editor.commands.setContent(content);
			},
			onUpdate({ editor }) {
				const content = editor.getJSON();
				interval(() => {
					dispatch(updateFile({ id, content }));
				}, 1000);
			}
		},
		[id]
	);

	return (
		<Container.Flex
			w='100%'
			direction='column'
			items='center'
			pos='relative'
		>
			<Header />
			<Toolbar editor={editor} />

			<Content>
				<EditorContent editor={editor} />
				{!id && <Empty />}
			</Content>
		</Container.Flex>
	);
};

export default Editor;
