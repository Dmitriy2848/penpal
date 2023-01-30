import { useDispatch, useSelector } from 'react-redux';
import { useEditor, EditorContent } from '@tiptap/react';

import { Empty, Content } from 'features/Editor/ui';
import toolbarExtensions from 'features/Editor/config/extensions.js';
import { updateFile } from 'features/FileTree/model/fileTreeSlice.js';
import Toolbar from 'features/Editor/ui/Toolbar/index.jsx';
import Container from 'shared/ui/atoms/Container/index.jsx';

const Editor = () => {
	const dispatch = useDispatch();
	const { current: id, files } = useSelector((state) => state.fileTree);
	const content = files.byId[id]?.content;

	function throttle(func, ms) {
		let isThrottled = false,
			savedArgs;
		function wrapper() {
			if (isThrottled) {
				savedArgs = arguments;
				return;
			}
			func.apply(null, arguments);

			isThrottled = true;

			setTimeout(function () {
				isThrottled = false;
				if (savedArgs) {
					wrapper.apply(null, savedArgs);
					savedArgs = null;
				}
			}, ms);
		}

		return wrapper;
	}

	const delayedCall = throttle(function (id, content) {
		dispatch(updateFile({ id, content }));
	}, 500);

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
				delayedCall(id, content);
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
			<Toolbar editor={editor} />
			<Content>
				<EditorContent editor={editor} />
				{!id && <Empty />}
			</Content>
		</Container.Flex>
	);
};

export default Editor;
