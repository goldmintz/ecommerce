import React from 'react';
import '../../styles/quiz/quiz.css';

const QuizIntro = ({ start }) => {
	return (
		<section className='intro-container'>
			<p>I'm just an intro. No big deal.</p>
			<button onClick={start} className='quiz-btn grow start-quiz-btn'>
				Start Quiz
			</button>
		</section>
	);
};

export default QuizIntro;
