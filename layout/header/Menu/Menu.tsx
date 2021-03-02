import React, { useState } from 'react';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';
import TileSection from './TileSection/TileSection';
import InfoSection from './InfoSection/InfoSection';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = () => {
	const navVariants = {
		open:
			{
				y: 0,
				scale: 1,
				transition:
					{
						duration: 0.8,
						ease:
							[
								0.65,
								0,
								0.35,
								1
							],
						when: 'beforeChildren'
					}
			},
		closed:
			{
				y: '100%',
				scale: 0.8,
				transition:
					{
						duration: 0.5,
						ease:
							[
								0.5,
								0,
								0.75,
								0
							]
					}
			}
	};

	const [
		isMenuOpen,
		setIsMenuOpen
	] = useState(false);
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<React.Fragment>
			<div className={styles.menuButton}>
				{
					!isMenuOpen ? <BiMenu className={styles.menuIcon} onClick={() => setIsMenuOpen(true)} /> :
					<AiOutlineClose
						className={styles.menuIcon}
						style={{ color: 'white', fill: 'white' }}
						onClick={() => setIsMenuOpen(false)}
					/>}
			</div>
			<motion.nav
				className={styles.navbar__container}
				initial="closed"
				variants={navVariants}
				animate={

						isMenuOpen ? 'open' :
						'closed'
				}
			>
				<TileSection closeMenu={closeMenu} />
				<InfoSection />
			</motion.nav>
		</React.Fragment>
	);
};

export default Menu;
