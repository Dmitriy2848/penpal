import { useEditor, EditorContent } from '@tiptap/react';
import EditorContainer from 'features/Editor/EditorContainer';
import toolbarExtensions from 'entities/Toolbar/lib/toolbarExtensions.js';
import Toolbar from 'entities/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { updateFile } from 'features/FileTree/model/fileTreeSlice.js';
import './Editor.css';

const template = {
	type: 'doc',
	content: [
		{
			type: 'heading',
			attrs: {
				level: 2
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

const Editor = () => {
	const dispatch = useDispatch();
	const fileTree = useSelector((state) => state.fileTree);
	const id = fileTree.current;
	const currentContent = fileTree.files.byId[id]?.content;
	console.log(id);
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
			onBeforeCreate({ editor }) {},
			onCreate({ editor }) {
				currentContent && editor.commands.setContent(currentContent);
			},
			onUpdate({ editor }) {
				const content = editor.getJSON();
				console.log(content);
				interval(() => {
					dispatch(updateFile({ id, content }));
				}, 1000);
			}
		},
		[id]
	);
	// todo продумай функционал добавления/добавь при монтировании фокус на редакторе
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
