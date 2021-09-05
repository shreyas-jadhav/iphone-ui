import React from 'react';
import styled from 'styled-components';

const HomeButtonWrapper = styled.div`
	width: 30%;
	left: 35%;
	right: 35%;
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;
	position: absolute;
	bottom: 8px;
	height: 4px;
	margin: 2px;
`;
const HomeSlider = styled.div`
	height: 8px;
	width: 100%;
	border-radius: 16px;
	background: white;
`;

const HomeButton = ({ status }: { status: string }) => {
	if (['booting'].includes(status)) return null;

	return (
		<HomeButtonWrapper>
			<HomeSlider />
		</HomeButtonWrapper>
	);
};

export default HomeButton;
