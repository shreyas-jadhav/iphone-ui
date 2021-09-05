import { useIPhone } from 'context/iphoneContext';
import React from 'react';
import { IPhone11FrameWrapper, ScreenBorder } from './IPhone11.styles';

const Iphone11Frame = ({ children }) => {
	const { frameColor } = useIPhone();
	return (
		<IPhone11FrameWrapper color={frameColor}>
			<ScreenBorder>{children}</ScreenBorder>
		</IPhone11FrameWrapper>
	);
};

export default Iphone11Frame;
