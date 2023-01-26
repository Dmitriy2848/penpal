import { useState } from 'react';
import useOnClickOutside from 'shared/hooks/useOnClickOutside.js';

function useDropdown(ref) {
	const [active, setActive] = useState(false);
	useOnClickOutside(ref, () => setActive(false));
	return {
		active,
		setActive
	};
}

export default useDropdown;
