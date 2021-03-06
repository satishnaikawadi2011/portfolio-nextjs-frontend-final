import React from 'react';
import ServiceCard from '../../service-card/ServiceCard';
import styles from './services.module.css';

const Services = () => {
	return (
		<section className={`section ${styles.services}`}>
			<div className="section__title">
				<h1>services</h1>
				<p>
					Things of which I have better knowledge and I can make any large and scalable projects in this part
					of developmnt.{' '}
				</p>
			</div>
			<div className={`section__center ${styles.section__services}`}>
				<ServiceCard icon="icon-android" title="App Development">
					I can build mobile apps in both ways i.e. either natively or hybrid mobile apps.I can build cross
					platform mobile apps with single codebase by using modern technologies such as Flutter, React Native
					and Ionic.
				</ServiceCard>
				<ServiceCard icon="icon-embed2" title="Web Development">
					Web development is my primary development skill. I have learned so many new frameworks and best
					design patterns for web development. So I can make large and scalable web applications very fast and
					with ease.
				</ServiceCard>
				<ServiceCard icon="icon-pencil" title="UI/UX Design">
					I am quite new to this field. But I am learning it very fast. I am learning how can I increase the
					stay of user on website or mobile app by enhancing its UX design.
				</ServiceCard>
			</div>
		</section>
	);
};

export default Services;
