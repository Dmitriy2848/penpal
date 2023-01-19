import React, { useState } from 'react';
import { Input } from '@geist-ui/react';
import { Search } from '@geist-ui/icons';

const SearchBar = () => {
	const [value, setValue] = useState('');
	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<Input
			clearable
			placeholder='Поиск'
			iconRight={<Search onClick={() => console.log(true)} />}
			iconClickable
			onChange={changeHandler}
			value={value}
			mx='20px'
		/>
	);
};

export default SearchBar;
