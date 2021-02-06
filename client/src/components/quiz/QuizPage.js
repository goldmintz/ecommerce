import React, { useState, useEffect } from 'react';

import Prompt from './Prompt';
import Results from './Results';
import QuizIntro from './QuizIntro';

import questionBank from './questionBank';

import '../../styles/quiz/quiz.css';

const Quiz = () => {
	const [currentPrompt, setCurrentPrompt] = useState(0);
	const [showResults, setShowResults] = useState(false);
	const [pointsTotal, setPointsTotal] = useState(null);
	// const [results, setResults] = useState(null);
	const [showIntro, setShowIntro] = useState(true);

	// Handlers to start and advance through quiz
	const startQuiz = () => {
		setShowIntro(false);
	};

	const resetQuiz = () => {
		//Reset all state props to original
		setShowIntro(true);
		setPointsTotal(null);
		setCurrentPrompt(0);
		setShowResults(false);

		// Remove local storage quiz points
		localStorage.setItem('quizPoints', null);
		localStorage.setItem('quizComplete', JSON.stringify('false'));
	};

	const nextPrompt = (points) => {
		let nextPrompt = currentPrompt + 1;
		let savePoints = () => {
			setPointsTotal(pointsTotal + points);
			localStorage.setItem('quizPoints', pointsTotal + points);
		};
		if (nextPrompt < questionBank.length) {
			setCurrentPrompt(nextPrompt);
			savePoints();
		} else if (nextPrompt === questionBank.length) {
			savePoints();
			setShowResults(true);
			localStorage.setItem('quizComplete', JSON.stringify('true'));
		}
	};

	//Provide image based on prompt index
	const imagePath =
		process.env.PUBLIC_URL + `/images/quiz/quiz-${currentPrompt}.jpg`;

	const backgroundImgStyle = {
		backgroundImage: `url(${imagePath}) `,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};

	return (
		<>
			{showResults ? (
				<Results points={pointsTotal} reset={resetQuiz} />
			) : showIntro ? (
				<QuizIntro start={startQuiz} />
			) : (
				<Prompt
					background={backgroundImgStyle}
					prompt={questionBank[currentPrompt].prompt}
					responses={questionBank[currentPrompt].responses}
					nextPrompt={nextPrompt}
				/>
			)}
		</>
	);
};

export default Quiz;
