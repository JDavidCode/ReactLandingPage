const TOKEN_KEY = 'ARNICAJWTTOKENTEMPORTAL';

// Guardar el token JWT en localStorage
export const saveToken = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

// Obtener el token JWT desde localStorage
export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};

// Remover el token JWT de localStorage
export const removeToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};
