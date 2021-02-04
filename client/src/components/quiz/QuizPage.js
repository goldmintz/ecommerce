import React, { useEffect, useState } from 'react';
import Prompt from './Prompt';
import Results from './Results';
import ShowIntro from './QuizIntro';
import '../../styles/quiz/quiz.css';
import questionBank from './questionBank';
import QuizIntro from './QuizIntro';

const Quiz = () => {
	const [currentPrompt, setCurrentPrompt] = useState(0);
	const [showResults, setShowResults] = useState(false);
	const [pointsTotal, setPointsTotal] = useState(null);
	const [showIntro, setShowIntro] = useState(true);

	const startQuiz = () => {
		setShowIntro(false);
	};

	const nextPrompt = (points) => {
		let nextPrompt = currentPrompt + 1;
		if (nextPrompt < questionBank.length) {
			setCurrentPrompt(nextPrompt);
			setPointsTotal(pointsTotal + points);
		} else {
			setShowResults(true);
		}
	};

	return (
		<>
			<div className='quiz-container'>
				<div className='prompt-container'>
					{showIntro ? (
						<QuizIntro start={startQuiz} />
					) : showResults ? (
						<Results points={pointsTotal} />
					) : (
						<Prompt
							prompt={questionBank[currentPrompt].prompt}
							responses={questionBank[currentPrompt].responses}
							nextPrompt={nextPrompt}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Quiz;
