import { getToken, saveToken } from './auth';

export const auth = async (username, password, ipAddress, userAgent) => {
	const response = await fetch('http://127.0.0.1/auth/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ username, password, ipAddress, userAgent }),
	});
	return response;
  };
  

export const register = async (username, password, email,) => {
	try {
		const response = await fetch('http://localhost:3001/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password, email })
		});

		if (!response.ok) {
			throw new Error('Error en el registro');
		}
		const redirectUrl = `/login`;
		window.location.href = redirectUrl;
		const data = await response.json();
		return response.status
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error en el registro');
	}
};