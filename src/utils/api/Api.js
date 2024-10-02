import { getToken } from './Auth';

// Función para obtener datos de usuarios desde el servidor
export const fetchUserData = async () => {
	try {
		const token = getToken();
		if (!token) {
			throw new Error('No se ha encontrado un token de autenticación');
		}

		const response = await fetch('http://127.0.0.1/auth/user/get', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});

		if (!response.ok) {
			console.log('Response status:', response.status); 
			throw new Error('Error al obtener los datos del perfil del usuario');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener los datos del perfil del usuario');
	}
};