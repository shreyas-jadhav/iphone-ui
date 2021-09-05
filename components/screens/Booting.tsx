import React, { useState } from 'react';
import styled from 'styled-components';
import { FaApple } from 'react-icons/fa';
const BootingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => (theme.theme === 'dark' ? `white` : `black`)};
	background-color: ${({ theme }) => (theme.theme === 'dark' ? `black` : `white`)};
	width: 100%;
	height: 100%;
`;

const Booting = () => {
	const [doneBooting, setDoneBooting] = useState(false);

	setTimeout(() => {
		setDoneBooting(true);
	}, 5000);

	if (doneBooting) return null;

	return (
		<BootingWrapper>
			<FaApple size={50} />
		</BootingWrapper>
	);
};

export default Booting;
