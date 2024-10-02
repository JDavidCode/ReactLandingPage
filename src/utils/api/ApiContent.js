export const fetchFeedContent = async () => {
	try {
		const response = await fetch('http://127.0.0.1/content/feed', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};

export const fetchUpdatesContent = async () => {
	try {
		const response = await fetch('http://127.0.0.1/content/updates', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};


export const fetchCommunityContent = async () => {
	try {
		const response = await fetch('http://127.0.0.1/content/community', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};

export const fetchMeetupsContent = async () => {
	try {
		const response = await fetch('http://127.0.0.1/content/meetups', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};

export const fetchCampaingContent = async () => {
	try {
		const response = await fetch('http://127.0.0.1/content/campaigns?count=4', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};
