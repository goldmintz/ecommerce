import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/quiz/prompt.css';

const Prompt = ({ prompt, responses, nextPrompt, background }) => {
	return (
		<>
			
			<Row className='prompt-container'>
				<Col className=' prompt-col mx-3 my-5'>
					<div id='prompt-question'>{prompt}</div>

					{responses.map((r, i) => (
						<div
							key={i}
							className='prompt-res grow'
							onClick={() => nextPrompt(r.points)}>
							{r.text}
						</div>
					))}
				</Col>
				<Col className='image-col mx-3 my-3' style={background}></Col>
			</Row>
		</>
	);
};

export default Prompt;
