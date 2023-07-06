import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ADMIN from "./pages/admin";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
	const router = useRoutes([
		{
			path: "/",
			element: <Home />,
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
