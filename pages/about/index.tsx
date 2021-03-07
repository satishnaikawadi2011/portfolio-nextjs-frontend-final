import React from 'react';
import Hero from '../../components/hero/Hero';
import About from '../../components/sections/about/About';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';

const AboutPage: React.FC<{}> = ({}) => {
	return (
		<PageWrapper title="About Me - Get to know aboute me">
			<Hero />
			<About />
		</PageWrapper>
	);
};

export default AboutPage;
