import { createContext, useContext, useEffect, useState } from "react";
import { themeChange } from "theme-change";

const ThemeContext = createContext({ theme: "iiec_light", setTheme: () => { } });

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "iiec_light"
	);
	useEffect(() => {
		themeChange(false);
	}, []);
	useEffect(() => {
		console.log("ThemeContext: theme changed to", theme);
		localStorage.setItem("theme", theme);
		document
			.getElementsByTagName("html")[0]
			.setAttribute("data-theme", theme);
	}, [theme]);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
