import React, { useEffect, useState } from 'react';
import Prompt from './Prompt';
import Results from './Results';
import '../../styles/quiz/quiz.css';
import questionBank from './questionBank';

const Quiz = () => {
	//walk through each question and record responses in state
	const [currentPrompt, setCurrentPrompt] = useState(0);
	const [showResults, setShowResults] = useState(false);

	const nextPrompt = () => {
		let nextPrompt = currentPrompt + 1;
		if (nextPrompt < questionBank.length) {
			setCurrentPrompt(nextPrompt);
		} else {
			setShowResults(true);
		}
	};

	return (
		<>
			<div className='quiz-container'>
				<div className='prompt-container'>
					{showResults ? (
						<Results />
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
