import React from 'react';
import '../../styles/quiz/quiz.css';

const Results = ({ points, resetQuiz }) => {
	const possiblePlants = [
		{
			name: 'Plant 1',
			link: 'plant1',
			imageLink: '/images/plant2.jpg',
			desc: 'n easy keeper with beautiful leaves.',
		},
		{
			name: 'Plant 2',
			link: 'plant2',
			imageLink: '/images/plant4.jpg',
			desc: ' little more challenging, but rewarding.',
		},
	];

	const resultsPlant = points <= 5 ? 'plant1' : 'plant2';

	return (
		<section className='results-wrapper'>
			<div className='results-text results-col'>
				<p>
					<span className='bold'>Congrats, future plant parent!</span>
					<br></br>
					You would enjoy{' '}
					{possiblePlants
						.filter((plant) => plant.link === resultsPlant)
						.map((plant) => {
							return (
								<>
									<span>
										{plant.name} because it is a{plant.desc}
									</span>
								</>
							);
						})}
				</p>

				<button className='grow retake-btn quiz-btn' onClick={resetQuiz}>
					Retake Quiz
				</button>
			</div>

			<div className='results-col results-img'>
				{possiblePlants
					.filter((plant) => plant.link === resultsPlant)
					.map((plant) => (
						<img src={plant.imageLink}></img>
					))}
			</div>
		</section>
	);
};

export default Results;
