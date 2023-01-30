import styled from 'styled-components';

import Tooltip from 'shared/ui/molecules/Tooltip/index.jsx';
import Button from 'shared/ui/atoms/Button/index.jsx';

import { ReactComponent as SettingsFill } from 'shared/assets/icons/settings-fill.svg';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 10px;
	width: 100%;
	min-height: 40px;

	border-bottom: 1px solid #f5f5f5;
`;

const Header = () => {
	return (
		<Container>
			<Tooltip
				text='Скоро появится'
				position='bottom-end'
			>
				<Button icon={<SettingsFill />} />
			</Tooltip>
		</Container>
	);
};

export default Header;
