import React from 'react';
import styles from './technologies.module.css';

const Technologies: React.FC<{}> = ({}) => {
	return (
		<section className="technologies section">
			<div className="section__title">
				<h1>technologies i use</h1>
			</div>
			<div className={`section__center ${styles.tech__section}`}>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-react" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-express" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-mongo" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-node" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-docker" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-psql" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-html" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-css" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-sass" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-js" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-ts" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-electron" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-flutter" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-redis" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-kubernetes" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-linux" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-webpack" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-python" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-django" />
				</svg>
				<svg className={styles.tech__icon}>
					<use href="images/sprite.svg#icon-flask" />
				</svg>
			</div>
		</section>
	);
};

export default Technologies;
