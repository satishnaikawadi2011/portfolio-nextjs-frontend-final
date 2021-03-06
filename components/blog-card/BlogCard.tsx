import { motion } from 'framer-motion';
import React from 'react';
import { cardVariant } from '../../utils/variants';
import styles from './blog-card.module.css';
import Rosa from 'react-on-scroll-animation';
import Link from 'next/link';
import Tag from '../tag/Tag';
import { Post } from '../../models/Post';

interface BlogCardProps {
	post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({
	post: { description, cover, title, tags, published_at, id, readingTime }
}) => {
	return (
		<motion.div variants={cardVariant} initial="hidden" animate="visible" className={styles.blog__card}>
			<Rosa animation="flip-left">
				<div className={styles.blog__img__container}>
					<img src={cover.formats.thumbnail.url || cover.url} alt={title} className={styles.blog__image} />
					<span className={styles.blog__createdAt__badge}>{published_at}</span>
				</div>
				<div className={styles.blog__card__body}>
					<Link href={`/posts/${id}`}>
						<h2 className={styles.blog__title}>{title}</h2>
					</Link>
					<p className={styles.blog__description}>{description}</p>
					<div className={styles.blog__tags__container}>
						{tags.slice(0, 3).map((tag) => {
							return <Tag tagName={tag.name} />;
						})}
					</div>
					<strong className={styles.reading__time}>&bull; {readingTime}</strong>
				</div>
			</Rosa>
		</motion.div>
	);
};

export default BlogCard;
