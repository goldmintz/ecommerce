import React from 'react';

import '../../styles/quiz/quiz.css';

const Results = ({ points, resetQuiz }) => {
	return (
		<section className='results-wrapper'>
			<div className='results-text results-col'>
				<p>
					Congrats, future plant parent! <br></br>You finished the quiz with{' '}
					<span className='bold'>{points} </span>
					total points.
				</p>

				<p>Product detail and link will go here</p>
				<button className='grow retake-btn quiz-btn' onClick={resetQuiz}>
					Retake Quiz
				</button>
			</div>
			<div className='results-col'>image here</div>
		</section>
	);
};

export default Results;
