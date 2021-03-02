import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeSnippet from './CodeSnippet';
import styles from './md-content.module.css';

const renderers = {
	code:
		function CS({ language, value }: any) {
			return <CodeSnippet language={language} code={value} />;
		}
};

interface MdContentProps {
	children: string;
}

const MdContent: React.FC<MdContentProps> = ({ children }) => {
	return (
		<ReactMarkdown className={styles.md__content} renderers={renderers} linkTarget="_blank">
			{children}
		</ReactMarkdown>
	);
};

export default MdContent;
