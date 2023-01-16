import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

import EditorContainer from 'features/Editor/EditorContainer';
import toolbarExtensions from 'entities/Toolbar/lib/toolbarExtensions.js';
import Toolbar from 'entities/Toolbar';

const Editor = () => {
	const editor = useEditor({
		extensions: toolbarExtensions,
		injectCSS: false,
		content: {
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
							text: 'Hi there,'
						}
					]
				}
			]
		}
	});

	return (
		<EditorContainer>
			<Toolbar editor={editor} />
			<EditorContent editor={editor} />
		</EditorContainer>
	);
};

export default Editor;
