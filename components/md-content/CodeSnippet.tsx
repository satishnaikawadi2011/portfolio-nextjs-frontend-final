import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import django from 'react-syntax-highlighter/dist/cjs/languages/hljs/django';
import monokaiSublime from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';
import CopyToClipboard from 'react-copy-to-clipboard';
import Snackbar from '../snackbar/Snackbar';
import { MdContentCopy } from 'react-icons/md';

import styles from './code-snippet.module.css';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('shell', bash);
SyntaxHighlighter.registerLanguage('django', django);
SyntaxHighlighter.registerLanguage('jsx', jsx);

interface CodeSnippetProps {
	fileName?: string;
	language: 'javascript' | 'typescript' | 'shell' | 'django' | 'jsx';
	code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, fileName, language }) => {
	const [
		openSnackbar,
		setOpenSnackbar
	] = useState(false);
	return (
		<div className={styles.code__snippet__container}>
			<div className={styles.inner__container}>
				<div className="flex-grow font-mono text-base">{fileName}</div>
				<Snackbar message="Copied To Clipboard !" open={openSnackbar} />
				<CopyToClipboard
					text={code}
					onCopy={() => {
						setOpenSnackbar(true);
						setTimeout(() => {
							setOpenSnackbar(false);
						}, 2000);
					}}
				>
					<span>
						<MdContentCopy className={styles.copy__icon} />
					</span>
				</CopyToClipboard>
			</div>
			<div className="">
				<SyntaxHighlighter
					language={language}
					style={monokaiSublime}
					showLineNumbers
					wrapLines
					customStyle={{
						background: '#192734'
					}}
				>
					{code}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default CodeSnippet;
