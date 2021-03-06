import React from 'react';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';
import readingTime from 'reading-time';
import SocialShare from '../../components/social-share/SocialShareIcons';

import styles from './post-page.module.css';
import formate from '../../utils/formateDate';
import Tag from '../../components/tag/Tag';
import MdContent from '../../components/md-content/MdContent';
import { Post } from '../../models/Post';
import { ParsedUrlQuery } from 'node:querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

interface Props {
	post: Post;
}

interface Params extends ParsedUrlQuery {
	slug: string;
}

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<React.Fragment>
			<PageWrapper title={post.title} className={styles.content}>
				<div className={styles.post__info}>
					<span>{formate(post.createdAt)}</span>
					<span>&bull; {readingTime(post.content).text}</span>
					<div>
						{post.tags.map((tag) => {
							return <Tag tagName={tag.name} />;
						})}
					</div>
					<SocialShare item={post} size={70} url="https://saty-portfolio.netlify.app/" />
				</div>
				<div className="divider" />
				<MdContent>{post.content}</MdContent>
				<div className="divider" />
				<div className={styles.tags__and__social__share}>
					<div className={styles.social__share}>
						<h2>Share</h2>
						<SocialShare item={post} size={50} url="https://saty-portfolio.netlify.app/" />
					</div>
					<div className={styles.tags}>
						<h2>Tags</h2>
						{post.tags.map((tag: any) => {
							return <Tag bgColor="var(--secondaryColor)" color="black" tagName={tag.name} />;
						})}
					</div>
				</div>
			</PageWrapper>
		</React.Fragment>
	);
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://saty-api.herokuapp.com/posts');
	const posts: Post[] = await res.json();

	const paths = posts.map((post) => {
		return { params: { slug: post.slug } };
	});

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const res = await fetch(`https://saty-api.herokuapp.com/posts/slug/${params.slug}`);
	const post: Post = await res.json();
	return {
		props: { post }
	};
};
