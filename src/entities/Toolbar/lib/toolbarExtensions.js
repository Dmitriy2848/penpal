import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Typography } from '@tiptap/extension-typography';
import { HardBreak } from '@tiptap/extension-hard-break';
import { Blockquote } from '@tiptap/extension-blockquote';
import { Bold } from '@tiptap/extension-bold';
import { Italic } from '@tiptap/extension-italic';
import { Underline } from '@tiptap/extension-underline';
import { Strike } from '@tiptap/extension-strike';
import { Heading } from '@tiptap/extension-heading';
import { Superscript } from '@tiptap/extension-superscript';
import { Subscript } from '@tiptap/extension-subscript';
import { TextAlign } from '@tiptap/extension-text-align';
import { Code } from '@tiptap/extension-code';
import { CodeBlock } from '@tiptap/extension-code-block';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { OrderedList } from '@tiptap/extension-ordered-list';
import { ListItem } from '@tiptap/extension-list-item';
import { BulletList } from '@tiptap/extension-bullet-list';
import { TaskList } from '@tiptap/extension-task-list';
import { TaskItem } from '@tiptap/extension-task-item';
import { History } from '@tiptap/extension-history';
import { TextStyle } from '@tiptap/extension-text-style';
import { Link } from '@tiptap/extension-link';

const toolbarExtensions = [
	Document,
	Text,
	Paragraph,
	Typography,
	TextStyle,
	HardBreak.configure({
		HTMLAttributes: {
			class: 'editor-hardBreak'
		}
	}),
	Blockquote.configure({
		HTMLAttributes: {
			class: 'editor-blockquote'
		}
	}),
	Bold.configure({
		HTMLAttributes: {
			class: 'editor-bold'
		}
	}),
	Italic.configure({
		HTMLAttributes: {
			class: 'editor-italic'
		}
	}),
	Underline.configure({
		HTMLAttributes: {
			class: 'editor-underline'
		}
	}),
	Strike.configure({
		HTMLAttributes: {
			class: 'editor-strike'
		}
	}),
	Heading.configure({
		HTMLAttributes: {
			class: 'editor-heading'
		}
	}),
	Superscript.configure({
		HTMLAttributes: {
			class: 'editor-superscript'
		}
	}),
	Subscript.configure({
		HTMLAttributes: {
			class: 'editor-subscript'
		}
	}),
	TextAlign.configure({
		types: ['heading', 'paragraph']
	}),
	Code.configure({
		HTMLAttributes: {
			class: 'editor-code'
		}
	}),
	CodeBlock.configure({
		HTMLAttributes: {
			class: 'editor-codeBlock'
		}
	}),
	Color,
	Highlight.configure({
		HTMLAttributes: {
			class: 'editor-highlight'
		},
		multicolor: true
	}),
	OrderedList.configure({
		HTMLAttributes: {
			class: 'editor-orderedList'
		}
	}),
	ListItem.configure(),
	BulletList.configure({
		HTMLAttributes: {
			class: 'editor-bulletList'
		}
	}),
	TaskList.configure({
		HTMLAttributes: {
			class: 'editor-taskList'
		}
	}),
	TaskItem.configure({
		HTMLAttributes: {
			class: 'editor-taskItem'
		},
		nested: true
	}),
	Link,
	History.configure({
		depth: 10,
		newGroupDelay: 3000
	})
];

export default toolbarExtensions;
