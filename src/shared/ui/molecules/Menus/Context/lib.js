import { useState, useEffect } from 'react';

const useContextMenu = (ref) => {
	const [clicked, setClicked] = useState(false);
	const [points, setPoints] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			setClicked(false);
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref]);

	return {
		clicked,
		setClicked,
		points,
		setPoints
	};
};

export default useContextMenu;
