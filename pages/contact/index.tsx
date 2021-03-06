import React from 'react';
import HeroListItem from '../../components/hero-list-item/HeroListItem';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';
import styles from './contact-page.module.css';

const seoInfo = {
	description:
		`If anyone has any queries regarding blog articles or want any suggestion,opinion about learning web development,app development,etc.,they can contact me any time.`,
	image: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/images/hero-3x.jpg`,
	url: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/contact`
};

const ContactPage: React.FC<{}> = ({}) => {
	return (
		<PageWrapper seoInfo={seoInfo} title="Contact Me- Ask anything regarding coding.">
			<div className={styles.page__content}>
				<ul className={styles.hero__list}>
					<HeroListItem
						icon="envelop"
						title="satishnaikawadi2001@gmail.com"
						text="Send us your query or suggestion anytime!"
					/>
					<HeroListItem icon="phone" title="8975179022 , 9324636618" text="Mon to Fri 9am to 6 pm" />
					<HeroListItem icon="home" title="Charan , maharashtra ,india" text="Near Ganesh Mandir" />
				</ul>
				<form action="https://formspree.io/f/xzbkwjnz" className={styles.form} method="POST">
					<div className={styles.first__half__form}>
						<div className={styles.form__group}>
							<label className={styles.label} htmlFor="name">
								Name
							</label>
							<input
								required
								type="text"
								className={styles.form__control}
								placeholder="Enter your name"
								name="name"
								id="name"
							/>
						</div>
						<div className={styles.form__group}>
							<label className={styles.label} htmlFor="email">
								Email
							</label>
							<input
								required
								type="email"
								className={styles.form__control}
								placeholder="Enter your email"
								name="email"
								id="email"
							/>
						</div>
						<div className={styles.form__group}>
							<label className={styles.label} htmlFor="address">
								Address
							</label>
							<input
								required
								type="text"
								className={styles.form__control}
								placeholder="Enter your address"
								name="address"
								id="address"
							/>
						</div>
					</div>
					<div className={styles.second__half__form}>
						<div className={styles.form__group}>
							<label className={styles.label} htmlFor="subject">
								Subject
							</label>
							<input
								required
								type="text"
								className={styles.form__control}
								placeholder="Enter subject"
								name="subject"
								id="subject"
							/>
						</div>
						<div className={styles.form__group}>
							<label className={styles.label} htmlFor="message">
								Message
							</label>
							<textarea
								required
								rows={5}
								className={styles.form__control}
								placeholder="Enter message"
								name="message"
								id="message"
							/>
						</div>
					</div>
					<button className="mainBtn" type="submit">
						send message
					</button>
				</form>
			</div>
		</PageWrapper>
	);
};

export default ContactPage;
