import React, { useRef } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Menu from './Menu/Menu';
import Logo from '../../components/logo/Logo';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<React.Fragment>
			<nav className={styles.navbar} id="navbar">
				<span className={styles.nav__logo}>
					<Link href="/">
						<a className={styles.logo__header}>
							<Logo className={styles.logo} />
							<h2>Satish</h2>
						</a>
					</Link>
				</span>
				<Menu />
			</nav>
		</React.Fragment>
	);
};

export default Header;
