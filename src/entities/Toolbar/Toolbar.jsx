import React from 'react';

import {
	ToolbarContainer,
	ButtonsGroup,
	Button,
	Separator
} from 'entities/Toolbar/ui';
import MenuDropdown from 'shared/components/blocks/MenuDropdown/index.jsx';
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

const Toolbar = React.memo(({ editor }) => {
	if (!editor) {
		return null;
	}
	const mapFn = (group, i, arr) => (
		<ButtonsGroup
			key={i}
			first={i === 0}
			last={i === arr.length - 1}
		>
			{group.map((el, i) => {
				if (el.type === 'button') {
					return (
						<Button
							key={i}
							icon={el.icon}
							shortcut={el.shortcut}
							isActive={el.active}
							onClick={el.clickHandler}
						/>
					);
				} else if (el.type === 'menu') {
					return (
						<MenuDropdown
							key={i}
							icon={el.icon}
							active={el.active}
							list={el.list}
						/>
					);
				}
			})}
			{i !== arr.length - 1 && <Separator />}
		</ButtonsGroup>
	);

	const toolbarElements = [
		[
			{
				type: 'button',
				name: 'Bold',
				icon: <Bold />,
				shortcut: 'ctrl b',
				active: editor.isActive('bold'),
				clickHandler: () => editor.chain().focus().toggleBold().run()
			},
			{
				type: 'button',
				name: 'Italic',
				icon: <Italic />,
				shortcut: 'ctrl i',
				active: editor.isActive('italic'),
				clickHandler: () => editor.chain().focus().toggleItalic().run()
			},
			{
				type: 'button',
				name: 'Underline',
				icon: <Underline />,
				shortcut: 'ctrl u',
				active: editor.isActive('underline'),
				clickHandler: () => editor.chain().focus().toggleUnderline().run()
			},
			{
				type: 'button',
				name: 'Strike',
				icon: <Strike />,
				shortcut: 'ctrl shift x',
				active: editor.isActive('strike'),
				clickHandler: () => editor.chain().focus().toggleStrike().run()
			}
		],
		[
			{
				type: 'menu',
				name: 'Heading',
				icon: <Heading />,
				active: editor.isActive('heading'),
				list: [
					{
						type: 'button',
						name: 'Level 1',
						icon: <Heading />,
						active: editor.isActive('heading', { level: 1 }),
						clickHandler: () =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
					},
					{
						type: 'button',
						name: 'Level 2',
						icon: <Heading />,
						active: editor.isActive('heading', { level: 2 }),
						clickHandler: () =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
					},
					{
						type: 'button',
						name: 'Level 3',
						icon: <Heading />,
						active: editor.isActive('heading', { level: 3 }),
						clickHandler: () =>
							editor.chain().focus().toggleHeading({ level: 3 }).run()
					},
					{
						type: 'button',
						name: 'Level 4',
						icon: <Heading />,
						active: editor.isActive('heading', { level: 4 }),
						clickHandler: () =>
							editor.chain().focus().toggleHeading({ level: 4 }).run()
					},
					{
						type: 'button',
						name: 'Level 5',
						icon: <Heading />,
						active: editor.isActive('heading', { level: 5 }),
						clickHandler: () =>
							editor.chain().focus().toggleHeading({ level: 5 }).run()
					},
					{
						type: 'button',
						name: 'Level 6',
						icon: <Heading />,
						active: editor.isActive('heading', { level: 6 }),
						clickHandler: () =>
							editor.chain().focus().toggleHeading({ level: 6 }).run()
					}
				]
			},
			{
				type: 'button',
				name: 'Blockquote',
				icon: <Blockquote />,
				shortcut: 'ctrl shift b',
				active: editor.isActive('blockquote'),
				clickHandler: () => editor.chain().focus().toggleBlockquote().run()
			},
			{
				type: 'button',
				name: 'Superscript',
				icon: <Superscript />,
				shortcut: 'ctrl .',
				active: editor.isActive('superscript'),
				clickHandler: () => editor.chain().focus().toggleSuperscript().run()
			},
			{
				type: 'button',
				name: 'Subscript',
				icon: <Subscript />,
				shortcut: 'ctrl ,',
				active: editor.isActive('subscript'),
				clickHandler: () => editor.chain().focus().toggleSubscript().run()
			},
			{
				type: 'menu',
				name: 'Align',
				icon: <AlignCenter />,
				active: editor.isActive({ textAlign: 'center' }),
				list: [
					{
						type: 'button',
						name: 'Left',
						icon: <AlignLeft />,
						active: editor.isActive({ textAlign: 'left' }),
						clickHandler: () =>
							editor.chain().focus().setTextAlign('left').run()
					},
					{
						type: 'button',
						name: 'Center',
						icon: <AlignCenter />,
						active: editor.isActive({ textAlign: 'center' }),
						clickHandler: () =>
							editor.chain().focus().setTextAlign('center').run()
					},
					{
						type: 'button',
						name: 'Right',
						icon: <AlignRight />,
						active: editor.isActive({ textAlign: 'right' }),
						clickHandler: () =>
							editor.chain().focus().setTextAlign('right').run()
					},
					{
						type: 'button',
						name: 'Justify',
						icon: <AlignJustify />,
						active: editor.isActive({ textAlign: 'justify' }),
						clickHandler: () =>
							editor.chain().focus().setTextAlign('justify').run()
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
				active: editor.isActive('code'),
				clickHandler: () => editor.chain().focus().toggleCode().run()
			},
			{
				type: 'button',
				name: 'CodeBlock',
				icon: <CodeBlock />,
				shortcut: 'ctrl alt e',
				active: editor.isActive('codeBlock'),
				clickHandler: () => editor.chain().focus().toggleCodeBlock().run()
			},
			{
				type: 'menu',
				name: 'Color',
				icon: <Letter />,
				// todo warning!!!
				active: editor.isActive({ textAlign: 'center' }),
				list: [
					{
						type: 'button',
						name: 'Red',
						icon: <Letter fill='#ae1dde' />,
						active: editor.isActive('textStyle', { color: '#de1d1d' }),
						clickHandler: () => editor.chain().focus().setColor('#de1d1d').run()
					},
					{
						type: 'button',
						name: 'Orange',
						icon: <Letter fill='#de571d' />,
						active: editor.isActive('textStyle', { color: '#de571d' }),
						clickHandler: () => editor.chain().focus().setColor('#de571d').run()
					},
					{
						type: 'button',
						name: 'Green',
						icon: <Letter fill='#6ade1d' />,
						active: editor.isActive('textStyle', { color: '#6ade1d' }),
						clickHandler: () => editor.chain().focus().setColor('#6ade1d').run()
					},
					{
						type: 'button',
						name: 'Blue',
						icon: <Letter fill='#1d54de' />,
						active: editor.isActive('textStyle', { color: '#1d54de' }),
						clickHandler: () => editor.chain().focus().setColor('#1d54de').run()
					},
					{
						type: 'button',
						name: 'Purple',
						icon: <Letter fill='#ae1dde' />,
						active: editor.isActive('textStyle', { color: '#ae1dde' }),
						clickHandler: () => editor.chain().focus().setColor('#ae1dde').run()
					}
				]
			},
			{
				type: 'menu',
				name: 'Highlighter',
				icon: <Highlighter />,
				active: editor.isActive('highlight'),
				list: [
					{
						type: 'button',
						name: 'Red',
						icon: <Highlighter fill='#de1d1d' />,
						active: editor.isActive('highlight', { color: '#de1d1d' }),
						clickHandler: () =>
							editor.chain().focus().toggleHighlight({ color: '#de1d1d' }).run()
					},
					{
						type: 'button',
						name: 'Orange',
						icon: <Highlighter fill='#debe1d' />,
						active: editor.isActive('highlight', { color: '#debe1d' }),
						clickHandler: () =>
							editor.chain().focus().toggleHighlight('#debe1d').run()
					},
					{
						type: 'button',
						name: 'Green',
						icon: <Highlighter fill='#6ade1d' />,
						active: editor.isActive('highlight', { color: '#6ade1d' }),
						clickHandler: () =>
							editor.chain().focus().toggleHighlight('#6ade1d').run()
					},
					{
						type: 'button',
						name: 'Blue',
						icon: <Highlighter fill='#1d54de' />,
						active: editor.isActive('highlight', { color: '#1d54de' }),
						clickHandler: () =>
							editor.chain().focus().toggleHighlight('#1d54de').run()
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
				active: editor.isActive('orderedList'),
				clickHandler: () => editor.chain().focus().toggleOrderedList().run()
			},
			{
				type: 'button',
				name: 'BulletList',
				icon: <BulletList />,
				shortcut: 'ctrl shift 8',
				active: editor.isActive('bulletList'),
				clickHandler: () => editor.chain().focus().toggleBulletList().run()
			},
			{
				type: 'button',
				name: 'TaskList',
				icon: <TaskList />,
				shortcut: 'ctrl shift 9',
				active: editor.isActive('taskList'),
				clickHandler: () => editor.chain().focus().toggleTaskList().run()
			}
		],
		[
			{
				type: 'button',
				name: 'Link',
				icon: <Link />,
				active: editor.isActive('link'),
				clickHandler: () => editor.chain().focus().setLink().run()
			},
			{
				// todo: warning!!!
				type: 'button',
				name: 'Table',
				icon: <Table />,
				active: editor.isActive('bold'),
				clickHandler: () => editor.chain().focus().toggleBold().run()
			},
			{
				type: 'button',
				name: 'Undo',
				icon: <Undo />,
				// todo: сделай через disabled
				shortcut: 'ctrl z',
				clickHandler: () => editor.chain().focus().undo().run()
			},
			{
				type: 'button',
				name: 'Redo',
				icon: <Redo />,
				// todo: сделай через disabled
				shortcut: 'ctrl y',
				clickHandler: () => editor.chain().focus().redo().run()
			}
		]
	];

	return <ToolbarContainer>{toolbarElements.map(mapFn)}</ToolbarContainer>;
});

export default Toolbar;
