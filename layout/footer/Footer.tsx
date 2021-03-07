import React from 'react';
import Socialicons from '../../components/social-icons/SocialIcons';
import styles from './footer.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<React.Fragment>
			<footer className={styles.footer}>
				<div className={styles.footer__center}>
					<section className={styles.footer__about}>
						<h1>about me</h1>
						<p>
							I am Satish.I have been persuing my Computer Science degree from 2020.I love to learn new
							Technologies in dev world.
						</p>
						<p>Copyright &copy; 2021 All rights reserved</p>
					</section>
					<section className={styles.social}>
						<h1>follow me</h1>
						<p>Let us be social</p>
						<Socialicons color="white" />
					</section>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
