import React from 'react';
import styles from './hero-list-item.module.css';

interface HeroListItemprops {
	icon: string;
	title: string;
	text?: string;
}

const HeroListItem: React.FC<HeroListItemprops> = ({ icon, title, text }) => {
	return (
		<li className={styles.hero__list__item}>
			<svg className={styles.hero__list__item__icon}>
				<use href={`images/sprite.svg#icon-${icon}`} />
			</svg>
			<div className={styles.list__text}>
				<span>{title}</span>
				<p>{text}</p>
			</div>
		</li>
	);
};

export default HeroListItem;
