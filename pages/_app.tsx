import 'styles/globals.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/global';
import { allThemes } from 'themes/common';
function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState('dark');

	return (
		<>
			<GlobalStyle />
			<button onClick={() => setTheme(`light`)}>Light</button>
			<button onClick={() => setTheme(`dark`)}>Dark</button>
			<ThemeProvider theme={allThemes[theme]}>
				<Component {...pageProps} />;
			</ThemeProvider>
		</>
	);
}

export default MyApp;
