import HomeButton from 'components/iOSComponents/HomeButton';
import Booting from 'components/screens/Booting';
import LockScreen from 'components/screens/LockScreen';
import React, { useEffect, useState } from 'react';

const FourteenPointSeven = () => {
	const [status, setStatus] = useState('booting');

	useEffect(() => {
		setTimeout(() => {
			setStatus('lockscreen');
		}, 6500);
	}, []);

	return (
		<>
			{status === 'booting' && <Booting />}
			{status === 'lockscreen' && <LockScreen />}
			<HomeButton status={status} />
		</>
	);
};

export default FourteenPointSeven;
