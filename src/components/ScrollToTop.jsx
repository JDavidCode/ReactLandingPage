import { useEffect } from 'react';

function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0); // Hace scroll al inicio de la página al montar el componente
	}, []); // El segundo argumento (un array vacío) indica que este efecto se ejecutará solo una vez, equivalente a componentDidMount

	return null; // Este componente no renderiza nada, solo se encarga de hacer el scroll al montarse
}

export default ScrollToTopOnMount;