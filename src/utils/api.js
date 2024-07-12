import { getToken, saveToken } from './auth';

// Función para manejar el login y obtener el token
export const auth = async (username, password) => {
	try {
		const response = await fetch('http://localhost:3001/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (!response.ok) {
			throw new Error('Error en el login');
		}

		const data = await response.json();
		const token = data.token;
		saveToken(token);
		const redirectUrl = `http://localhost:5174/?token=${token}`;
		window.location.href = redirectUrl;

	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error en el login');
	}
};

// Método para registrar al usuario
export const register = async (username, password, email,) => {
	try {
		const response = await fetch('http://localhost:3001/auth/register', {
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
