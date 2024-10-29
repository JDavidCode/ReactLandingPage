import { getToken, saveToken } from './auth';

export const auth = async (email, password) => {
	try {
	  const response = await fetch('http://localhost/auth/login', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	  });
  
	  if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(`Error en el login: ${errorMessage}`);
	  }
  
	  const data = await response.json();
	  const token = data.token;
	  saveToken(token);
	  window.location.href = `http://localhost:5174/?token=${token}`;
	} catch (error) {
	  console.error('Error:', error.message);
	  throw new Error('Error en el login');
	}
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