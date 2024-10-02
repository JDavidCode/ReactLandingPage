export const fetchUserCloud = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/', {
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

export const fetchUserCloudPhotos = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/photos/', {
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

export const fetchUserCloudInfo = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/info/', {
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

export const fetchActivity = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/activity/', {
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
export const fetchRecentActivity = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/activity/recent', {
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

export const fetchUserActivity = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/activity/user', {
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

export const fetchUserFamily = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/family/members', {
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

export const fetchUserFamilyShared = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/family/shared-data', {
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

export const fetchUserFamilyRelationshipOptions = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/family/relationship-options', {
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

export const fetchUserFamilyRoleOptions = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/family/role-options', {
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

export const fetchUserFamilyRecomendedPeople = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/family/recommended-people', {
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

export const fetchUserEvents = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/calendar/events', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		console.log(data)
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};


export const fetchUserToDo = async () => {
	try {
		const response = await fetch('http://127.0.0.1/cloud/calendar/toDo', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});

		if (!response.ok) {
			throw new Error('Error al obtener cotenido');
		}

		const data = await response.json();
		console.log(data)
		return data;
	} catch (error) {
		console.error('Error:', error.message);
		throw new Error('Error al obtener el contenido');
	}
};