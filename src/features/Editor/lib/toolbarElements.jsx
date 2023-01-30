import { ReactComponent as Bold } from 'shared/assets/icons/bold.svg';
import { ReactComponent as Blockquote } from 'shared/assets/icons/block-quote.svg';
import { ReactComponent as CodeBlock } from 'shared/assets/icons/code-block.svg';
import { ReactComponent as Code } from 'shared/assets/icons/code-simple.svg';
import { ReactComponent as Heading } from 'shared/assets/icons/heading.svg';
import { ReactComponent as Highlighter } from 'shared/assets/icons/highlighter.svg';
import { ReactComponent as Italic } from 'shared/assets/icons/italic.svg';
import { ReactComponent as Link } from 'shared/assets/icons/link.svg';
import { ReactComponent as BulletList } from 'shared/assets/icons/bullet-list.svg';
import { ReactComponent as TaskList } from 'shared/assets/icons/task-list.svg';
import { ReactComponent as OrderedList } from 'shared/assets/icons/ordered-list.svg';
import { ReactComponent as Subscript } from 'shared/assets/icons/subscript.svg';
import { ReactComponent as Superscript } from 'shared/assets/icons/superscript.svg';
import { ReactComponent as Table } from 'shared/assets/icons/table.svg';
import { ReactComponent as Underline } from 'shared/assets/icons/underline.svg';
import { ReactComponent as Strike } from 'shared/assets/icons/strikethrough.svg';
import { ReactComponent as AlignCenter } from 'shared/assets/icons/align-center.svg';
import { ReactComponent as AlignLeft } from 'shared/assets/icons/align-left.svg';
import { ReactComponent as AlignRight } from 'shared/assets/icons/align-right.svg';
import { ReactComponent as AlignJustify } from 'shared/assets/icons/align-justify.svg';
import { ReactComponent as Letter } from 'shared/assets/icons/a.svg';
import { ReactComponent as Undo } from 'shared/assets/icons/rotate-left.svg';
import { ReactComponent as Redo } from 'shared/assets/icons/rotate-right.svg';

const toolbarElements = (editor) => [
	[
		{
			type: 'button',
			name: 'Undo',
			icon: <Undo />,
			// todo: сделай через disabled
			shortcut: 'ctrl z',
			onClick: () => editor.chain().focus().undo().run()
		},
		{
			type: 'button',
			name: 'Redo',
			icon: <Redo />,
			// todo: сделай через disabled
			shortcut: 'ctrl y',
			onClick: () => editor.chain().focus().redo().run()
		}
	],
	[
		{
			type: 'button',
			name: 'Bold',
			icon: <Bold />,
			shortcut: 'ctrl b',
			primary: editor.isActive('bold'),
			onClick: () => editor.chain().focus().toggleBold().run()
		},
		{
			type: 'button',
			name: 'Italic',
			icon: <Italic />,
			shortcut: 'ctrl i',
			primary: editor.isActive('italic'),
			onClick: () => editor.chain().focus().toggleItalic().run()
		},
		{
			type: 'button',
			name: 'Underline',
			icon: <Underline />,
			shortcut: 'ctrl u',
			primary: editor.isActive('underline'),
			onClick: () => editor.chain().focus().toggleUnderline().run()
		},
		{
			type: 'button',
			name: 'Strike',
			icon: <Strike />,
			shortcut: 'ctrl shift x',
			primary: editor.isActive('strike'),
			onClick: () => editor.chain().focus().toggleStrike().run()
		}
	],
	[
		{
			type: 'menu',
			name: 'Heading',
			icon: <Heading />,
			primary: editor.isActive('heading'),
			list: [
				{
					type: 'button',
					name: 'Level 1',
					icon: <Heading />,
					primary: editor.isActive('heading', { level: 1 }),
					onClick: () =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
				},
				{
					type: 'button',
					name: 'Level 2',
					icon: <Heading />,
					primary: editor.isActive('heading', { level: 2 }),
					onClick: () =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
				},
				{
					type: 'button',
					name: 'Level 3',
					icon: <Heading />,
					primary: editor.isActive('heading', { level: 3 }),
					onClick: () =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
				},
				{
					type: 'button',
					name: 'Level 4',
					icon: <Heading />,
					primary: editor.isActive('heading', { level: 4 }),
					onClick: () =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
				},
				{
					type: 'button',
					name: 'Level 5',
					icon: <Heading />,
					primary: editor.isActive('heading', { level: 5 }),
					onClick: () =>
						editor.chain().focus().toggleHeading({ level: 5 }).run()
				},
				{
					type: 'button',
					name: 'Level 6',
					icon: <Heading />,
					primary: editor.isActive('heading', { level: 6 }),
					onClick: () =>
						editor.chain().focus().toggleHeading({ level: 6 }).run()
				}
			]
		},
		{
			type: 'button',
			name: 'Blockquote',
			icon: <Blockquote />,
			shortcut: 'ctrl shift b',
			primary: editor.isActive('blockquote'),
			onClick: () => editor.chain().focus().toggleBlockquote().run()
		},
		{
			type: 'button',
			name: 'Superscript',
			icon: <Superscript />,
			shortcut: 'ctrl .',
			primary: editor.isActive('superscript'),
			onClick: () => editor.chain().focus().toggleSuperscript().run()
		},
		{
			type: 'button',
			name: 'Subscript',
			icon: <Subscript />,
			shortcut: 'ctrl ,',
			primary: editor.isActive('subscript'),
			onClick: () => editor.chain().focus().toggleSubscript().run()
		},
		{
			type: 'menu',
			name: 'Align',
			icon: <AlignCenter />,
			primary: editor.isActive({ textAlign: 'center' }),
			list: [
				{
					type: 'button',
					name: 'Left',
					icon: <AlignLeft />,
					primary: editor.isActive({ textAlign: 'left' }),
					onClick: () => editor.chain().focus().setTextAlign('left').run()
				},
				{
					type: 'button',
					name: 'Center',
					icon: <AlignCenter />,
					primary: editor.isActive({ textAlign: 'center' }),
					onClick: () => editor.chain().focus().setTextAlign('center').run()
				},
				{
					type: 'button',
					name: 'Right',
					icon: <AlignRight />,
					primary: editor.isActive({ textAlign: 'right' }),
					onClick: () => editor.chain().focus().setTextAlign('right').run()
				},
				{
					type: 'button',
					name: 'Justify',
					icon: <AlignJustify />,
					primary: editor.isActive({ textAlign: 'justify' }),
					onClick: () => editor.chain().focus().setTextAlign('justify').run()
				}
			]
		}
	],
	[
		{
			type: 'button',
			name: 'Code',
			icon: <Code />,
			shortcut: 'ctrl e',
			primary: editor.isActive('code'),
			onClick: () => editor.chain().focus().toggleCode().run()
		},
		{
			type: 'button',
			name: 'CodeBlock',
			icon: <CodeBlock />,
			shortcut: 'ctrl alt e',
			primary: editor.isActive('codeBlock'),
			onClick: () => editor.chain().focus().toggleCodeBlock().run()
		},
		{
			type: 'menu',
			name: 'Color',
			icon: <Letter />,
			// todo warning!!!
			// primary: editor.isActive({ textAlign: 'center' }),
			list: [
				{
					type: 'button',
					name: 'Red',
					icon: <Letter fill='#ae1dde' />,
					fill: '#de1d1d',
					primary: editor.isActive('textStyle', { color: '#de1d1d' }),
					onClick: () => editor.chain().focus().setColor('#de1d1d').run()
				},
				{
					type: 'button',
					name: 'Orange',
					icon: <Letter fill='#de571d' />,
					fill: '#de571d',
					primary: editor.isActive('textStyle', { color: '#de571d' }),
					onClick: () => editor.chain().focus().setColor('#de571d').run()
				},
				{
					type: 'button',
					name: 'Green',
					icon: <Letter fill='#6ade1d' />,
					fill: '#6ade1d',
					primary: editor.isActive('textStyle', { color: '#6ade1d' }),
					onClick: () => editor.chain().focus().setColor('#6ade1d').run()
				},
				{
					type: 'button',
					name: 'Blue',
					icon: <Letter fill='#1d54de' />,
					fill: '#1d54de',
					primary: editor.isActive('textStyle', { color: '#1d54de' }),
					onClick: () => editor.chain().focus().setColor('#1d54de').run()
				},
				{
					type: 'button',
					name: 'Purple',
					icon: <Letter fill='#ae1dde' />,
					fill: '#ae1dde',
					primary: editor.isActive('textStyle', { color: '#ae1dde' }),
					onClick: () => editor.chain().focus().setColor('#ae1dde').run()
				}
			]
		},
		{
			type: 'menu',
			name: 'Highlighter',
			icon: <Highlighter />,
			primary: editor.isActive('highlight'),
			list: [
				{
					type: 'button',
					name: 'Red',
					icon: <Highlighter fill='#de1d1d' />,
					fill: '#de1d1d',
					primary: editor.isActive('highlight', { color: '#de1d1d' }),
					onClick: () =>
						editor.chain().focus().toggleHighlight({ color: '#de1d1d' }).run()
				},
				{
					type: 'button',
					name: 'Orange',
					icon: <Highlighter fill='#debe1d' />,
					fill: '#debe1d',
					primary: editor.isActive('highlight', { color: '#debe1d' }),
					onClick: () =>
						editor.chain().focus().toggleHighlight({ color: '#debe1d' }).run()
				},
				{
					type: 'button',
					name: 'Green',
					icon: <Highlighter fill='#6ade1d' />,
					fill: '#6ade1d',
					primary: editor.isActive('highlight', { color: '#6ade1d' }),
					onClick: () =>
						editor.chain().focus().toggleHighlight({ color: '#6ade1d' }).run()
				},
				{
					type: 'button',
					name: 'Blue',
					icon: <Highlighter fill='#1d54de' />,
					fill: '#1d54de',
					primary: editor.isActive('highlight', { color: '#1d54de' }),
					onClick: () =>
						editor.chain().focus().toggleHighlight({ color: '#1d54de' }).run()
				}
			]
		}
	],
	[
		{
			type: 'button',
			name: 'NumberedList',
			icon: <OrderedList />,
			shortcut: 'ctrl shift 7',
			primary: editor.isActive('orderedList'),
			onClick: () => editor.chain().focus().toggleOrderedList().run()
		},
		{
			type: 'button',
			name: 'BulletList',
			icon: <BulletList />,
			shortcut: 'ctrl shift 8',
			primary: editor.isActive('bulletList'),
			onClick: () => editor.chain().focus().toggleBulletList().run()
		},
		{
			type: 'button',
			name: 'TaskList',
			icon: <TaskList />,
			shortcut: 'ctrl shift 9',
			primary: editor.isActive('taskList'),
			onClick: () => editor.chain().focus().toggleTaskList().run()
		}
	]
	// [
	// 	{
	// 		type: 'button',
	// 		name: 'Link',
	// 		icon: <Link />,
	// 		primary: editor.isActive('link'),
	// 		onClick: () => editor.chain().focus().setLink().run()
	// 	},
	// 	{
	// 		// todo: warning!!!
	// 		type: 'button',
	// 		name: 'Table',
	// 		icon: <Table />,
	// 		primary: editor.isActive('bold'),
	// 		onClick: () => editor.chain().focus().toggleBold().run()
	// 	}
	// ]
];

export default toolbarElements;
