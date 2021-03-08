import React from 'react';
import styles from './socila-share-icons.module.css';

import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
	RedditShareButton,
	RedditIcon
} from 'react-share';

interface SocialShareProps {
	item: any;
	url: string;
	size?: number;
}

const SocialShare: React.FC<SocialShareProps> = ({ item = {}, url, size = 50 }) => {
	return (
		<div className="flex items-center text-secondary text-5xl">
			<FacebookShareButton url={url} quote={item.title} className={styles.share__btn}>
				<FacebookIcon
					size={size}
					bgStyle={{
						fill: 'none'
					}}
					iconFillColor="var(--secondaryColor)"
				/>
			</FacebookShareButton>
			<TwitterShareButton
				url={url}
				title={item.title}
				hashtags={item.tags.map((tag: any) => tag.name)}
				className={styles.share__btn}
			>
				<TwitterIcon
					size={size}
					bgStyle={{
						fill: 'none'
					}}
					iconFillColor="var(--secondaryColor)"
				/>
			</TwitterShareButton>
			<LinkedinShareButton
				url={url}
				title={item.title}
				summary={item.description}
				// source={process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}
				className={styles.share__btn}
			>
				<LinkedinIcon
					size={size}
					bgStyle={{
						fill: 'none'
					}}
					iconFillColor="var(--secondaryColor)"
				/>
			</LinkedinShareButton>
			<WhatsappShareButton url={url} title={item.title} className={styles.share__btn}>
				<WhatsappIcon
					size={size}
					bgStyle={{
						fill: 'none'
					}}
					iconFillColor="var(--secondaryColor)"
				/>
			</WhatsappShareButton>
			<TelegramShareButton url={url} title={item.title} about={item.description} className={styles.share__btn}>
				<TelegramIcon
					size={size}
					bgStyle={{
						fill: 'none'
					}}
					iconFillColor="var(--secondaryColor)"
				/>
			</TelegramShareButton>
			<RedditShareButton about={item.description} url={url} title={item.title} className={styles.share__btn}>
				<RedditIcon
					size={size}
					bgStyle={{
						fill: 'none'
					}}
					iconFillColor="var(--secondaryColor)"
				/>
			</RedditShareButton>
		</div>
	);
};

export default SocialShare;
