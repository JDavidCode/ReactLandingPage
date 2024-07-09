import { fetchContent, fetchFeedContent } from './apiContent';

// Función para manejar el login y luego obtener los datos del usuario
export const handleContent = async (updateUser) => {
	try {
		const userData = await fetchContent(); // Usa el token para obtener los datos del usuario
		updateUser(userData); // Actualiza los datos del usuario en el contexto
	} catch (error) {
		console.error('Error:', error.message);
	}
};

// Función para manejar el login y luego obtener los datos del usuario
export const handleBlogContent = async (updateUser) => {
	try {
		const userData = await fetchFeedContent(); // Usa el token para obtener los datos del usuario
		updateUser(userData); // Actualiza los datos del usuario en el contexto
	} catch (error) {
		console.error('Error:', error.message);
	}
};


