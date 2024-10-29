import { fetchUserData } from './Api';

const getParameterByName = (name, url) => {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const tokenFromUrl = getParameterByName('token');

if (tokenFromUrl) {
	saveToken(tokenFromUrl)
	window.history.replaceState({}, document.title, '/');
}

export const handleLoginAndFetchData = async (updateUser) => {
	try {
		const userData = await fetchUserData(); 
		updateUser(userData); 
	} catch (error) {
		console.error('Error:', error.message);
	}
};