import {
	ToolbarContainer,
	ButtonsGroup,
	Button,
	Separator
} from 'entities/Toolbar/ui';

import { ReactComponent as Blockquote } from 'shared/assets/icons/block-quote.svg';
import { ReactComponent as Bold } from 'shared/assets/icons/bold.svg';
import { ReactComponent as CodeBlock } from 'shared/assets/icons/code-block.svg';
import { ReactComponent as Code } from 'shared/assets/icons/code-simple.svg';
import { ReactComponent as Heading } from 'shared/assets/icons/heading.svg';
import { ReactComponent as Highlighter } from 'shared/assets/icons/highlighter.svg';
import { ReactComponent as Italic } from 'shared/assets/icons/italic.svg';
import { ReactComponent as Link } from 'shared/assets/icons/link.svg';
import { ReactComponent as BulletList } from 'shared/assets/icons/bullet-list.svg';
import { ReactComponent as TaskList } from 'shared/assets/icons/task-list.svg';
import { ReactComponent as NumberedList } from 'shared/assets/icons/numbered-list.svg';
import { ReactComponent as Subscript } from 'shared/assets/icons/subscript.svg';
import { ReactComponent as Superscript } from 'shared/assets/icons/superscript.svg';
import { ReactComponent as Table } from 'shared/assets/icons/table.svg';
import { ReactComponent as Underline } from 'shared/assets/icons/underline.svg';
import { ReactComponent as Strike } from 'shared/assets/icons/strikethrough.svg';
import { ReactComponent as TextAlign } from 'shared/assets/icons/align-center.svg';
import { ReactComponent as Color } from 'shared/assets/icons/palette.svg';
import { ReactComponent as Undo } from 'shared/assets/icons/rotate-left.svg';
import { ReactComponent as Redo } from 'shared/assets/icons/rotate-right.svg';

const Toolbar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<ToolbarContainer>
			<ButtonsGroup first>
				<Button
					icon={<Bold />}
					shortcut={['ctrl', 'b']}
					isActive={editor.isActive('bold')}
					onClick={() => editor.chain().focus().toggleBold().run()}
				/>
				<Button
					icon={<Italic />}
					shortcut={['ctrl', 'i']}
					isActive={editor.isActive('italic')}
					onClick={() => editor.chain().focus().toggleItalic().run()}
				/>
				<Button
					icon={<Underline />}
					shortcut={['ctrl', 'u']}
					isActive={editor.isActive('underline')}
					onClick={() => editor.chain().focus().toggleUnderline().run()}
				/>
				<Button
					icon={<Strike />}
					shortcut={['ctrl', 'shift', 'x']}
					isActive={editor.isActive('strike')}
					onClick={() => editor.chain().focus().toggleStrike().run()}
				/>
			</ButtonsGroup>
			<Separator />
			<ButtonsGroup>
				{/*todo добавь список*/}
				<Button
					icon={<Heading />}
					shortcut={['ctrl', 'alt', '1-6']}
					isActive={editor.isActive('heading')}
					// onClick={() =>
					// 	editor.chain().focus().toggleHeading({ level: 1 }).run()
					// }
				/>
				<Button
					icon={<Blockquote />}
					shortcut={['ctrl', 'shift', 'b']}
					isActive={editor.isActive('blockquote')}
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
				/>
				<Button
					icon={<Superscript />}
					shortcut={['ctrl', '.']}
					isActive={editor.isActive('superscript')}
					onClick={() => editor.chain().focus().toggleSuperscript().run()}
				/>
				<Button
					icon={<Subscript />}
					shortcut={['ctrl', ',']}
					isActive={editor.isActive('subscript')}
					onClick={() => editor.chain().focus().toggleSubscript().run()}
				/>
				{/*todo add list*/}
				<Button
					icon={<TextAlign />}
					shortcut={['ctrl', 'shift', 'l/e/r/j']}
				/>
			</ButtonsGroup>
			<Separator />
			<ButtonsGroup>
				<Button
					icon={<Code />}
					shortcut={['ctrl', 'e']}
					isActive={editor.isActive('code')}
					onClick={() => editor.chain().focus().toggleCode().run()}
				/>
				<Button
					icon={<CodeBlock />}
					shortcut={['ctrl', 'alt', 'e']}
					isActive={editor.isActive('codeBlock')}
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				/>
				{/*todo add list*/}
				<Button
					icon={<Color />}
					// isActive={editor.isActive('textStyle', { color: 'idЦвета' })}
				/>
				{/*todo add list*/}
				<Button
					icon={<Highlighter />}
					shortcut={['ctrl', 'shift', 'h']}
					isActive={editor.isActive('highlight')}
					onClick={() => editor.chain().focus().toggleHighlight().run()}
				/>
			</ButtonsGroup>
			<Separator />
			<ButtonsGroup>
				<Button
					icon={<NumberedList />}
					shortcut={['ctrl', 'shift', '7']}
					isActive={editor.isActive('orderedList')}
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
				/>
				<Button
					icon={<BulletList />}
					shortcut={['ctrl', 'shift', '8']}
					isActive={editor.isActive('bulletList')}
					onClick={() => editor.chain().focus().toggleBulletList().run()}
				/>
				<Button
					icon={<TaskList />}
					shortcut={['ctrl', 'shift', '9']}
					isActive={editor.isActive('taskList')}
					onClick={() => editor.chain().focus().toggleTaskList().run()}
				/>
			</ButtonsGroup>
			<Separator />
			<ButtonsGroup last>
				{/*todo deal with links*/}
				<Button
					icon={<Link />}
					isActive={editor.isActive('link')}
					onClick={() => editor.chain().focus().toggleLink().run()}
				/>
				{/*todo set up a table*/}
				<Button icon={<Table />} />
				<Button
					icon={<Undo />}
					shortcut={['ctrl', 'z']}
					isActive={editor.isActive('undo')}
					onClick={() => editor.chain().focus().undo().run()}
				/>
				<Button
					icon={<Redo />}
					shortcut={['ctrl', 'y']}
					isActive={editor.isActive('redo')}
					onClick={() => editor.chain().focus().redo().run()}
				/>
			</ButtonsGroup>
		</ToolbarContainer>
	);
};

export default Toolbar;
