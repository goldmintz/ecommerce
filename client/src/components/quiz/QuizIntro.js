import React from 'react';
import { Button } from 'react-bootstrap';

const QuizIntro = ({ start }) => {
	return (
		<div>
			<p>I'm just an intro. No big deal.</p>
			<Button onClick={start}>Start Quiz</Button>
		</div>
	);
};

export default QuizIntro;
