import React, { useState, useEffect } from 'react';
import PageTitleMeta from '../layout/PageTitle-Meta';
import Prompt from './Prompt';
import Results from './Results';
import QuizIntro from './QuizIntro';

//import quiz questions from stored object
import questionBank from './questionBank';

import '../../styles/quiz/quiz.css';

const Quiz = () => {
	//custom hook to manage localstorage values when user 'navigates away' from quiz component
	const useStickyQuizState = (defaultValue, key) => {
		const [value, setValue] = useState(() => {
			const stickyValue = window.localStorage.getItem(key);
			return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
		});

		console.log(value);

		useEffect(() => {
			window.localStorage.setItem(key, JSON.stringify(value));
		}, [key, value]);
		return [value, setValue];
	};

	//local state management
	const [currentPrompt, setCurrentPrompt] = useState(0);
	const [showResults, setShowResults] = useState(false);
	const [showIntro, setShowIntro] = useState(true);

	//quiz complete and total points state managed with custom hook (see above)
	const [quizComplete, setQuizComplete] = useStickyQuizState(
		'false',
		'quizComplete',
	);

	const [pointsTotal, setPointsTotal] = useStickyQuizState(null, 'quizPoints');

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

		// Remove local storage quiz points and clear complete value
		localStorage.setItem('quizPoints', null);
		setQuizComplete(false);
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
			setQuizComplete(true);
		}
	};

	// //Provide image based on prompt index
	// const imagePath =
	// 	process.env.PUBLIC_URL + `/images/quiz/quiz-${currentPrompt}.jpg`;

	// const backgroundImgStyle = {
	// 	backgroundImage: `url(${imagePath}) `,
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundPosition: 'center',
	// 	backgroundSize: 'cover',
	// };

	return (
		<div className='quiz-container'>
			<PageTitleMeta title={'Sprouts | Plant Finder Quiz'} />
			{showResults || quizComplete ? (
				<Results points={pointsTotal} resetQuiz={resetQuiz} />
			) : showIntro ? (
				<QuizIntro start={startQuiz} />
			) : (
				<Prompt
					/* background={backgroundImgStyle} */
					prompt={questionBank[currentPrompt].prompt}
					responses={questionBank[currentPrompt].responses}
					nextPrompt={nextPrompt}
				/>
			)}
		</div>
	);
};

export default Quiz;
