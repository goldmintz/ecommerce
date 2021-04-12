import React from 'react';
import '../../styles/quiz/quiz.css';

const Prompt = ({ prompt, responses, nextPrompt, background }) => {
	return (
		<>
			<section className='prompt-container'>
				<div id='prompt-question'>{prompt}</div>

				{responses.map((r, i) => (
					<div
						key={i}
						className='prompt-res grow quiz-btn'
						onClick={() => nextPrompt(r.points)}>
						{r.text}
					</div>
				))}
			</section>
		</>
	);
};

export default Prompt;
