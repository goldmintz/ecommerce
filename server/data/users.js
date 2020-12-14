import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin',
		email: 'admin@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Potato Jones',
		email: 'popo@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
	{
		name: 'Goo Bird',
		email: 'googoo@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
];

export default users;
