import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaApple } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
const AppleLogo = animated(FaApple);
const BootingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => (theme.osTheme === 'dark' ? `white` : `black`)};
	background-color: ${({ theme }) => (theme.osTheme === 'dark' ? `black` : `white`)};
	width: 100%;
	height: 100%;
`;

const Booting = () => {
	const [doneBooting, setDoneBooting] = useState(false);

	const [unmount, setUnmount] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setDoneBooting(true);
		}, 5000);

		setTimeout(() => {
			setUnmount(true);
		}, 6000);
	}, []);

	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reverse: doneBooting,
		delay: 800,
	});

	if (unmount) return null;
	return (
		<BootingWrapper>
			<AppleLogo style={props} size={50} />
		</BootingWrapper>
	);
};

export default Booting;
