import {getToken, saveToken } from './auth';

// Función para manejar el login y obtener el token
export const auth = async (username, password) => {
	try {
		const response = await fetch('http://localhost:3000/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (!response.ok) {
			console.log(response)
			throw new Error('Error en el login');
		}

		const data = await response.json();
		const token = data.token;
		saveToken(token); // Guarda el token en localStorage usando saveToken
		return token;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error en el login');
	}
};

// Método para registrar al usuario
export const register = async (username, password, email, ) => {
	try {
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password, email })
		});

		if (!response.ok) {
			throw new Error('Error en el registro');
		}

		const data = await response.json();
		return response.status
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error en el registro');
	}
};
