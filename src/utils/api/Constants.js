import { fetchUserData } from './Api';
import { saveToken } from './Auth';

// Función para obtener el valor de un parámetro de la URL por su nombre
const getParameterByName = (name, url) => {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// Obtener el token de la URL
const tokenFromUrl = getParameterByName('token');

if (tokenFromUrl) {
	// Almacenar el token en localStorage para uso futuro
	saveToken(tokenFromUrl)
	// Redirigir sin el token en la URL
	window.history.replaceState({}, document.title, '/');
}


// Función para manejar el login y luego obtener los datos del usuario
export const handleLoginAndFetchData = async (updateUser) => {
	try {
		const userData = await fetchUserData(); // Usa el token para obtener los datos del usuario
		updateUser(userData); // Actualiza los datos del usuario en el contexto
	} catch (error) {
		console.error('Error:', error.message);
	}
};