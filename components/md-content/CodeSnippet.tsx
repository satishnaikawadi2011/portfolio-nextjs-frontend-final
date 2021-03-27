import React, { useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import py from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import django from 'react-syntax-highlighter/dist/cjs/languages/prism/django';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/handlebars';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import materialDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

import CopyToClipboard from 'react-copy-to-clipboard';
import Snackbar from '../snackbar/Snackbar';
import { MdContentCopy } from 'react-icons/md';

import styles from './code-snippet.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('py', py);
SyntaxHighlighter.registerLanguage('django', django);
interface CodeSnippetProps {
	fileName?: string;
	language: 'js' | 'ts' | 'jsx' | 'tsx' | 'css' | 'html' | 'py' | 'django';
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
					style={materialDark}
					showLineNumbers
					wrapLines
					customStyle={{
						background: '#2F2F2F'
					}}
				>
					{code}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default CodeSnippet;
