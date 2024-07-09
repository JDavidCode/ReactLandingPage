import React, { createContext, useContext, useState } from 'react';

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
	const [contentData, setContentData] = useState(null);

	const updateContent = (newContentData) => {
		setContentData(newContentData);
	};

	return (
		<ContentContext.Provider value={{ contentData, updateContent }}>
			{children}
		</ContentContext.Provider>
	);
};

export const useContent = () => useContext(ContentContext);
