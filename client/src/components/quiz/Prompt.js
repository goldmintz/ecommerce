import React from 'react';

const Prompt = ({ prompt, responses, nextPrompt }) => {
	return (
		<>
			<div id='prompt-question'>{prompt}</div>
			<div>
				{responses.map((r, i) => (
					<div key={i} className='prompt-res' onClick={nextPrompt}>
						{r}
					</div>
				))}
			</div>
		</>
	);
};

export default Prompt;
