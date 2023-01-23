import { useDispatch, useSelector } from 'react-redux';
import { useEditor, EditorContent } from '@tiptap/react';

import EditorContainer from 'widgets/Editor/ui';
import toolbarExtensions from 'widgets/Editor/config/extensions.js';
import { updateFile } from 'features/FileTree/model/fileTreeSlice.js';

import Toolbar from 'entities/Toolbar';

import 'widgets/Editor/ui/Editor.css';

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

	// todo запомнить последние аргументы и вызвать функцию
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
			content: template,
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
		<EditorContainer>
			<Toolbar editor={editor} />
			<EditorContent
				editor={editor}
				style={{ width: '100%', height: '100%' }}
			/>
		</EditorContainer>
	);
};

export default Editor;
