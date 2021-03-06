import React from 'react';
import Link from 'next/link';
import BlogCard from '../../blog-card/BlogCard';
import styles from './blogs.module.css';

const Blogs = ({ posts }) => {
	return (
		<section className="blogs section">
			<div className="section__title">
				<h1>blog articles</h1>
				<p>
					My articles on the things related to coding which excites me the most and which I thing can explain
					to others in precise manner.
				</p>
			</div>
			{
				<React.Fragment>
					<div className={`section__center ${styles.blogs__section}`}>
						{posts.map((post) => {
							return <BlogCard post={post}>{post.description}</BlogCard>;
						})}
					</div>
					<div className={styles.btn__container}>
						<Link href="/posts">
							<a className="mainBtn" type="button">
								blog
							</a>
						</Link>
					</div>
				</React.Fragment>
			}
		</section>
	);
};

export default Blogs;
