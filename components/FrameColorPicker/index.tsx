import { useIPhone } from 'context/iphoneContext';
import styled from 'styled-components';
import { transiton } from 'themes/global';

import React from 'react';
const FrameColorPickerWrapper = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	list-style: none;

	li {
		margin: 4px;
	}
`;

const ColorButton = styled.button`
	border: ${({ selected, theme }) => (selected ? `1px solid ${theme.colors.primary}` : `0px solid black`)};
	${transiton(`border`, 160)};
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: block;
	background-color: ${({ color }) => color};
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
	${transiton(`box-shadow`)};
	${transiton(`transform`)};
	&:hover {
		box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
		transform: scale(1.05);
	}
`;
export const FrameColorPicker = ({ colors }) => {
	const { frameColor, setFrameColor } = useIPhone();
	return (
		<FrameColorPickerWrapper>
			{Object.keys(colors).map((name) => (
				<li>
					<ColorButton selected={frameColor === name} key={name} color={colors[name]} onClick={() => setFrameColor(name)}></ColorButton>
				</li>
			))}
		</FrameColorPickerWrapper>
	);
};
