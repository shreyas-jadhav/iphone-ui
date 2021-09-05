import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const colors = {
	purple: '#d1cdda',
	yellow: '#ffe681',
	green: '#aee1cd',
	black: '#1f2020',
	white: '#f9f6ef',
	product: '#ba0c2e',
};

export const IPhone11FrameWrapper = styled.div`
	display: flex;
	border: 8px solid ${(props) => colors[props.color] || colors.black};
	background-color: ${(props) => colors[props.color] || colors.black};
	box-shadow: 0px 4px 16px 4px rgba(0, 0, 0, 0.4);
	margin: 16px;
	transition: border 500ms linear;
	border-radius: ${themeGet('radius.screen.outer')};
	height: 544.2519685px;
	width: 269.85826772px;
	z-index: -1;
	box-sizing: border-box;
`;

export const ScreenBorder = styled.div`
	box-sizing: border-box;
	border-radius: ${themeGet('radius.screen.inner')};
	height: 100%;
	width: 100%;
	z-index: 1;
	overflow: hidden;
	background: black;
`;
