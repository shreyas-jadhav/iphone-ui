import React from 'react';
import styled from 'styled-components';
import { BsFillUnlockFill } from 'react-icons/bs';
import { IoIosFlashlight, IoIosCamera } from 'react-icons/io';
import moment from 'moment';
import { transiton } from 'themes/global';
import { animated, useSpring } from '@react-spring/web';
const LockScreenWrapper = styled.div`
	display: flex;

	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: start;
	background-image: url(${({ theme }) => (theme.osTheme === 'light' ? `/light14.jpg` : `dark14.jpg`)});
	background-size: cover;
	height: 100%;
	width: 100%;
	position: relative;
	color: white;
`;

const AnimatedLockScreen = animated(LockScreenWrapper);
export const LockLogo = styled.div`
	margin: 16px auto 0px;
	height: 30px;
`;

export const Time = styled.h1`
	font-size: 46px;
	font-weight: normal;
	text-align: center;
	margin: 4px auto;
`;
const DateDisplay = styled.h2`
	margin: 0;
	font-size: 12px;
	font-weight: 600;
	text-align: center;
`;

const BottomIcons = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 32px;
`;

export const CircularIcon = styled.button`
	height: 36px;
	width: 36px;
	border: none;
	background: rgba(0, 0, 0, 0.3);
	border-radius: 50%;
	padding: 4px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		height: 22px;
		width: 22px;
	}

	${transiton('all')};
	&:hover {
		transform: scale(1.4);
		background: rgba(0, 0, 0);
	}
`;
const LockScreen = () => {
	const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, duration: 500 });
	return (
		<AnimatedLockScreen style={props}>
			<LockLogo>
				<BsFillUnlockFill size={'100%'} />
			</LockLogo>
			<Time>{moment().format('h[:]m')}</Time>
			<DateDisplay>{moment().format('dddd [,] D MMMM')}</DateDisplay>
			<BottomIcons>
				<CircularIcon>
					<IoIosFlashlight />
				</CircularIcon>
				<CircularIcon>
					<IoIosCamera />
				</CircularIcon>
			</BottomIcons>
		</AnimatedLockScreen>
	);
};

export default LockScreen;
