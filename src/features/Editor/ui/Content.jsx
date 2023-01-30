import styled from 'styled-components';

const Content = styled.div`
	position: relative;
	width: 800px;
	height: calc(100vh - 40px - 35px);
	overflow: auto;

	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
	::-webkit-scrollbar-thumb {
		background-color: #eaeaea;
	}

	.ProseMirror {
		width: inherit;
		height: calc(100vh - 40px - 35px);
		outline: none;

		> * + * {
			margin-top: 10px;
		}

		ul,
		ol {
			padding: 0 16px;
		}

		ul[data-type='taskList'] {
			list-style: none;
			padding: 0;

			p {
				margin: 0;
			}

			li {
				display: flex;

				> label {
					flex: 0 0 auto;
					margin-right: 0.5rem;
					user-select: none;
				}

				> div {
					flex: 1 1 auto;
				}
			}
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.1;
			margin: 20px 0;
		}

		code {
			background-color: rgba(#616161, 0.1);
			color: #616161;
		}

		pre {
			background: #0d0d0d;
			color: #fff;
			font-family: 'JetBrainsMono', monospace;
			padding: 0.75rem 1rem;
			border-radius: 0.5rem;

			code {
				color: inherit;
				padding: 0;
				background: none;
				font-size: 0.8rem;
			}
		}

		blockquote {
			padding-left: 1rem;
			border-left: 2px solid rgba(#0d0d0d, 0.1);
		}

		hr {
			border: none;
			border-top: 2px solid rgba(#0d0d0d, 0.1);
			margin: 2rem 0;
		}
	}
`;

export default Content;
