import React from 'react';
import { IPhoneProvider } from 'context/iphoneContext';
import { FrameColorPicker } from 'components/FrameColorPicker';
import { colors } from 'components/frames/IPhone11.styles';
import Iphone11Frame from 'components/frames/IPhone11';
import FourteenPointSeven from 'components/os/FourteenPointSeven';

const index = () => {
	return (
		<IPhoneProvider>
			<Iphone11Frame>
				<FourteenPointSeven />
			</Iphone11Frame>
			<FrameColorPicker colors={colors} />
		</IPhoneProvider>
	);
};

export default index;
