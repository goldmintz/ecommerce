import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Rating = ({ value, text }) => {
	const iconColor = { color: '#4bab84' };
	return (
		<Row>
			<Col md={3}>
				<div className='rating'>
					<span>
						<i
							style={iconColor}
							className={
								value >= 1
									? 'fas fa-star'
									: value >= 0.5
									? 'fas fa-star-half-alt'
									: 'far fa-star'
							}></i>
					</span>
					<span>
						<i
							style={iconColor}
							className={
								value >= 2
									? 'fas fa-star'
									: value >= 1.5
									? 'fas fa-star-half-alt'
									: 'far fa-star'
							}></i>
					</span>
					<span>
						<i
							style={iconColor}
							className={
								value >= 3
									? 'fas fa-star'
									: value >= 2.5
									? 'fas fa-star-half-alt'
									: 'far fa-star'
							}></i>
					</span>
					<span>
						<i
							style={iconColor}
							className={
								value >= 4
									? 'fas fa-star'
									: value >= 3.5
									? 'fas fa-star-half-alt'
									: 'far fa-star'
							}></i>
					</span>
					<span>
						<i
							style={iconColor}
							className={
								value >= 5
									? 'fas fa-star'
									: value >= 4.5
									? 'fas fa-star-half-alt'
									: 'far fa-star'
							}></i>
					</span>
				</div>
			</Col>
			<Col md={9}>{text && text}</Col>
		</Row>
	);
};

export default Rating;
