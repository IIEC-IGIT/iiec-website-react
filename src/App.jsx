import { useRoutes } from "react-router-dom";
import "./App.css";
import HOME from "./pages/home";
import ADMIN from "./pages/admin";
import TEAM from "./pages/team";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
	const router = useRoutes([
		{
			path: "/",
			element: <HOME />,
		},
		{
			path: "/Team",
			element: <TEAM />,
		},
	]);
	return (
		<>
			<Navigation />
			{router}
			<Footer />
		</>
	);
	return router;
}

export default App;
