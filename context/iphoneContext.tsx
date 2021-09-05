import React, { useContext, useState } from 'react';

export interface ContextTypes {
	frameColor: string;
	setFrameColor: React.Dispatch<React.SetStateAction<string>>;
}
export const IPhoneContext = React.createContext<ContextTypes>({
	frameColor: 'black',
} as unknown as ContextTypes);

export const IPhoneProvider = ({ children }) => {
	const [frameColor, setFrameColor] = useState('black');

	return <IPhoneContext.Provider value={{ frameColor, setFrameColor }}>{children}</IPhoneContext.Provider>;
};

export const useIPhone = () => useContext(IPhoneContext);
