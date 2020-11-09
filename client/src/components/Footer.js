import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py3'>Copyright &copy;Ecommerce</Col>
				</Row>
			</Container>
			I am a footer.
		</footer>
	);
};

export default Footer;
