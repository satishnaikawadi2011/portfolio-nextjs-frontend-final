import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { cardVariant } from '../../utils/variants';
import styles from './blog-card.module.css';
import Rosa from 'react-on-scroll-animation';
import Link from 'next/link';
import Tag from '../tag/Tag';
import { Post } from '../../models/Post';
import readingTimeFunc from 'reading-time';
import truncateText from '../../utils/truncateText';
import formate from '../../utils/formateDate';

interface BlogCardProps {
	post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({
	post: { description, cover, title, tags, published_at, slug, content }
}) => {
	const [
		isWindow,
		setIsWindow
	] = useState(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsWindow(true);
		}
	}, []);
	return (
		<motion.div variants={cardVariant} initial="hidden" animate="visible" className={styles.blog__card}>
			{isWindow && (
				<Rosa animation="flip-left">
					<div className={styles.blog__img__container}>
						<img src={cover.url} alt={title} className={styles.blog__image} />
						<span className={styles.blog__createdAt__badge}>{formate(published_at)}</span>
					</div>
					<div className={styles.blog__card__body}>
						<Link href={`/posts/${slug}`}>
							<h2 className={styles.blog__title}>{title}</h2>
						</Link>
						<p className={styles.blog__description}>{truncateText(description, 150, '...')}</p>
						<div className={styles.blog__tags__container}>
							{tags.slice(0, 3).map((tag) => {
								return <Tag tagName={tag.name} />;
							})}
						</div>
						<strong className={styles.reading__time}>&bull; {readingTimeFunc(content).text}</strong>
					</div>
				</Rosa>
			)}
		</motion.div>
	);
};

export default BlogCard;
