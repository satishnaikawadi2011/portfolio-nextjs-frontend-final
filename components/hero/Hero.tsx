import React from 'react';
import HeroListItem from '../hero-list-item/HeroListItem';
import styles from './hero.module.css';
import { motion } from 'framer-motion';
import Socialicons from '../social-icons/SocialIcons';
import Image from 'next/image';

const heroVariant = {
	visible:
		{
			opacity: 1,
			y: 0,
			transition: { delay: 0.2, duration: 0.4, type: 'spring', stiffness: 100 }
		},
	hidden:
		{
			opacity: 0,
			y: '-100vh'
		}
};

interface HeroProps {
	path?: string;
}

const Hero: React.FC<HeroProps> = ({ path }) => {
	return (
		<React.Fragment>
			<div
				className={

						path === '/' ? `${styles.hero__bg__home}` :
						`${styles.hero__bg__about}`
				}
			/>
			<motion.main className={styles.hero} initial="hidden" animate="visible" variants={heroVariant}>
				<div className={styles.hero__image__container}>
					<picture>
						<source srcSet="images/hero-2x.jpg" media="(min-width: 450px)" className={styles.hero__image} />
						<source srcSet="images/hero-3x.jpg" media="(min-width: 650px)" className={styles.hero__image} />
						<source srcSet="images/hero-4x.jpg" media="(min-width: 850px)" className={styles.hero__image} />
						<img
							src="/images/hero-1x.jpg"
							alt="Satish Naikawadi"
							width={200}
							height={300}
							className={styles.hero__image}
						/>
					</picture>
					{/* <Image
						layout="responsive"
						width={500}
						height={500}
						className={styles.hero__image}
						src="/images/hero-1.jpg"
						alt="Satish Naikawadi"
					/> */}
				</div>
				<div className={styles.hero__info}>
					<div className={styles.hero__title}>
						<h1 className={styles.hero__intro__text}>hello everybody , i am</h1>
						<h1 className={styles.hero__name}>satish naikawadi</h1>
						<h2>Web Developer / App Developer / CS College Student</h2>
					</div>
					<p className={styles.hero__text}>
						I am Satish.I have been persuing my Computer Science degree from 2020.I love to learn new
						Technologies in dev world.I really likes to share my knowledge with dev community and also learn
						myself.
					</p>
					<ul className={styles.hero__list}>
						<HeroListItem icon="calendar" title="16th january, 2001" />
						<HeroListItem icon="envelop" title="satishnaikawadi2001@gmail.com" />
						<HeroListItem icon="phone" title="8975179022 , 9324636618" />
						<HeroListItem icon="home" title="Charan , maharashtra ,india" />
					</ul>
					<Socialicons />
				</div>
			</motion.main>
		</React.Fragment>
	);
};

export default Hero;
