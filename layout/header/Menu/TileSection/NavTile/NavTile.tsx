import React from 'react';
import { motion } from 'framer-motion';
import styles from './NavTile.module.css';
import { useRouter } from 'next/router';

const directions = {
	top:
		{
			open:
				{
					y: 0
				},
			closed:
				{
					y: '100%'
				}
		},
	right:
		{
			open:
				{
					x: 0
				},
			closed:
				{
					x: '100%'
				}
		},
	bottom:
		{
			open:
				{
					y: 0
				},
			closed:
				{
					y: '-100%'
				}
		},
	left:
		{
			open:
				{
					x: 0
				},
			closed:
				{
					x: '-100%'
				}
		}
};

interface NavTileProps {
	direction: 'top' | 'right' | 'bottom' | 'left';
	title: string;
	subTitle: string;
	url: string;
	theme: 'body' | 'card';
	onClick: () => unknown;
}

const NavTile: React.FC<NavTileProps> = ({ direction, onClick, subTitle, theme, title, url }) => {
	const router = useRouter();

	const variants = {
		open:
			{
				opacity: 1,
				...directions[direction].open,
				transition:
					{
						when: 'beforeChildren',
						staggerChildren: 0.2,
						duration: 0.6,
						ease:
							[
								0.83,
								0,
								0.17,
								1
							]
					}
			},
		closed:
			{
				opacity: 0,
				...directions[direction].closed,
				transition:
					{
						duration: 0.5
					}
			}
	};

	const contentVariants = {
		open:
			{
				opacity: 1,
				...directions[direction].open,
				transition:
					{
						duration: 0.9,
						bounce: 0.1,
						ease:
							[
								0.22,
								1,
								0.36,
								1
							]
					}
			},
		closed:
			{
				opacity: 0,
				...directions[direction].closed
			}
	};

	return (
		<div
			className={`${styles.tile} ${
				theme === 'body' ? styles.body :
				styles.card}`}
		>
			<motion.div className={`${styles.tile__container}`} variants={variants} initial={'closed'}>
				<motion.a
					className={`${styles.title}`}
					variants={contentVariants}
					initial={'closed'}
					title={title}
					onClick={(event) => {
						onClick();
						setTimeout(() => router.push(url), 300);
						event.preventDefault();
					}}
				>
					<h2>{title}</h2>
				</motion.a>
				<motion.p className={`${styles.subTitle}`} variants={contentVariants} initial={'closed'}>
					{subTitle}
				</motion.p>
			</motion.div>
		</div>
	);
};

export default NavTile;
