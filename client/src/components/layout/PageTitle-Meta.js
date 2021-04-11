import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitleMeta = ({ title, desc }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={desc}></meta>
		</Helmet>
	);
};

PageTitleMeta.defaultProps = {
	title: 'Sprouts | Online Plant Shop',
	desc: 'The freshest plants on the Internet',
};

export default PageTitleMeta;
