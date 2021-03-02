import React from 'react';
import NavTile from './NavTile/NavTile';
import styles from './TileSection.module.css';

interface TileSectionProps {
	closeMenu: () => unknown;
}

const TileSection: React.FC<TileSectionProps> = ({ closeMenu }) => {
	return (
		<div className={styles.tiles__section}>
			<NavTile
				direction="bottom"
				onClick={closeMenu}
				title="Projects"
				subTitle="Get to know about my work and stack I use!"
				theme="body"
				url="/projects"
			/>
			<NavTile
				direction="left"
				onClick={closeMenu}
				title="Posts"
				subTitle="My articles on coding things which excites me!"
				theme="card"
				url="/blogs"
			/>
			<NavTile
				direction="right"
				onClick={closeMenu}
				title="Contact"
				subTitle="Wanna collaborate , always ready!"
				theme="card"
				url="/contact"
			/>
			<NavTile
				direction="top"
				onClick={closeMenu}
				title="About"
				subTitle="Get to know more about me!"
				theme="body"
				url="/about"
			/>
		</div>
	);
};

export default TileSection;
