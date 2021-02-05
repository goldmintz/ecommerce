const questionBank = [
	{
		prompt: 'Is this your first plant?',
		additionalText: "It's ok to be new",
		responses: [
			{ text: "Yes, I'm a verdant virgin", points: 1 },
			{ text: "I'm a proud plant parent", points: 2 },
		],
	},
	{
		prompt: 'How much light will the plant get?',
		additionalText: 'Be honest',
		responses: [
			{ text: 'Bright, direct sun from a window', points: 1 },
			{ text: 'Almost the dark side of the moon', points: 2 },
		],
	},
	{
		prompt: 'Where will the plant be placed?',
		additionalText: "Here's more dummy text",
		responses: [
			{ text: 'On my desk', points: 1 },
			{ text: 'On a bookshelf', points: 2 },
			{ text: 'In a sunny window', points: 3 },
		],
	},
	{
		prompt: 'What is your aesthetic?',
		additionalText: 'I like big buds and I cannot lie',
		responses: [
			{ text: 'Long and flowing', points: 1 },
			{ text: 'Tall and statuesque', points: 2 },
			{ text: "Short 'n thicc", points: 3 },
		],
	},

	{
		prompt: 'Do you have pets?',
		additionalText: 'Some plants are poisonous',
		responses: [
			{ text: "It's just me and the plants", points: 1 },
			{ text: 'I have a fur baby or two', points: 2 },
		],
	},
];

export default questionBank;
