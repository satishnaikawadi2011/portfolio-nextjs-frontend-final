import React from 'react';
import styles from './social-icons.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

interface SocialIconsProps {
	color?: string;
}

const Socialicons: React.FC<SocialIconsProps> = ({ color = 'var(--primaryText)' }) => {
	return (
		<div className={styles.social__icons}>
			<Link href="https://www.facebook.com/satishananda.naikawadi.3">
				<FaFacebookF
					className={styles.social__icon}
					style={{ fill: color, border: `3px solid ${color}` }}
					fill={color}
					color={color}
				/>
			</Link>
			<Link href="https://www.instagram.com/satish_011e/">
				<FaInstagram
					className={styles.social__icon}
					style={{ fill: color, border: `3px solid ${color}` }}
					fill={color}
					color={color}
				/>
			</Link>
			<Link href="https://www.linkedin.com/in/satish-naikawadi-8558b5192/">
				<FaLinkedinIn
					className={styles.social__icon}
					style={{ fill: color, border: `3px solid ${color}` }}
					fill={color}
					color={color}
				/>
			</Link>
			<Link href="/">
				<FaTwitter
					className={styles.social__icon}
					style={{ fill: color, border: `3px solid ${color}` }}
					fill={color}
					color={color}
				/>
			</Link>
		</div>
	);
};

export default Socialicons;
