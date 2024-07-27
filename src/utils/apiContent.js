export const fetchFeedContent = async () => {
	try {
		const response = await fetch('http://localhost:3003/feed', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data; // Puedes devolver cualquier otra información útil obtenida en la respuesta
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};
export const fetchUpdatesContent = async () => {
	try {
		const response = await fetch('http://localhost:3003/updates', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data; // Puedes devolver cualquier otra información útil obtenida en la respuesta
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};


export const fetchCommunityContent = async () => {
	try {
		const response = await fetch('http://localhost:3003/community', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data; // Puedes devolver cualquier otra información útil obtenida en la respuesta
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};

