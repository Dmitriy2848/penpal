import { useRef } from 'react';
import styled from 'styled-components';

import useDropdown from 'shared/ui/molecules/Menus/Dropdown/lib.js';
import Button from 'shared/ui/atoms/Button';

const Wrapper = styled.div`
	position: relative;
`;

const Trigger = styled(Button)`
	border-radius: 0;
`;

const Menu = styled.div`
	position: absolute;
	top: calc(100% + 10px);
	left: 50%;
	transform: translateX(-50%);

	display: flex;

	background-color: #fff;
	box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
	border-radius: 5px;

	overflow: hidden;
	z-index: 998;
`;

const Item = styled(Button)`
	border-radius: 0;

	svg {
		fill: ${({ fill }) => fill};
	}
`;

const Dropdown = ({ icon, primary, menuList }) => {
	const ref = useRef();
	const { active, setActive } = useDropdown(ref);
	const closeOnClick = (itemFn) => {
		itemFn();
		setActive(false);
	};

	return (
		<Wrapper>
			<Trigger
				icon={icon}
				primary={primary}
				onClick={() => setActive(true)}
			/>
			{active && (
				<Menu ref={ref}>
					{menuList.map((el, i) => (
						<Item
							key={i}
							fill={el?.fill}
							icon={el.icon}
							primary={el?.primary}
							onClick={() => closeOnClick(el?.onClick)}
						/>
					))}
				</Menu>
			)}
		</Wrapper>
	);
};

export default Dropdown;
