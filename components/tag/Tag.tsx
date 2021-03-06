import React, { useState } from 'react';
import Link from 'next/link';
import styles from './tag.module.css';

interface TagProps {
	tagName: string;
	bgColor?: string;
	color?: string;
	isProject?: boolean;
}

const Tag: React.FC<TagProps> = ({ isProject = false, tagName, bgColor, color }) => {
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
			<a
				style={{
					cursor:

							isProject ? 'none' :
							'pointer',
					...tagStyle
				}}
				onClick={(e) => {
					if (isProject) {
						e.preventDefault();
					}
				}}
				key={tagName}
				className={styles.tag}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				#{tagName}
			</a>
		</Link>
	);
};

export default Tag;
