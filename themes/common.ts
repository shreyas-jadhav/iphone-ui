import { light } from './light';
import { dark } from './dark';
export const common = {
	osTheme: 'dark',
	radius: {
		screen: {
			outer: '16px',
			inner: '16px',
		},
	},
	colors: {
		primary: '#2997ff',
		black: '#1f2020',
	},
};

export const allThemes = {
	light: { ...common, light },
	dark: { ...common, dark },
};
