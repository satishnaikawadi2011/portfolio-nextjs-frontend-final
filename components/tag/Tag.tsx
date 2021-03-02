import React, { useState } from 'react';
import Link from 'next/link';
import styles from './tag.module.css';

interface TagProps {
	tagName: string;
	bgColor?: string;
	color?: string;
}

const Tag: React.FC<TagProps> = ({ tagName, bgColor, color }) => {
	const [
		hover,
		setHover
	] = useState(false);
	const toggleHover = () => {
		setHover(!hover);
	};
	let tagStyle = {};
	if (hover) {
		tagStyle = {
			backgroundColor: 'transparent',
			color: 'var(--primaryText)',
			border: `2px solid ${bgColor}`,
			textDecoration: 'underline'
		};
	}
	else {
		tagStyle = { backgroundColor: bgColor, color };
	}
	return (
		<Link href={`/posts/tag/${tagName}`}>
			<span
				key={tagName}
				className={styles.tag}
				style={tagStyle}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				#{tagName}
			</span>
		</Link>
	);
};

export default Tag;
