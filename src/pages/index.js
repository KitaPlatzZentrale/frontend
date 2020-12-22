import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Kitaplatz Kinderleicht"
				content="Naja wir machen halt so 'n Ding mit Machine Learning, damit eure Kinnärs auch nen schönen Ort finden."
				illustration={HeroIllustration}
			/>{' '}
		</Layout>
	);
}
