import { useRoutes } from "react-router-dom";
import "./App.css";
import HOME from "./pages/home";
import ADMIN from "./pages/admin";
import ANNOUNCEMENT from "./pages/announcement";
import TEAM from "./pages/team";
import EVENTS from "./pages/events";
import GALLERY from "./pages/gallery";
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
		{
			path: "/Announcement",
			element: <ANNOUNCEMENT />,
		},
		{
			path: "/Admin",
			element: <ADMIN />,
		},
		{
			path: "/Events",
			element: <EVENTS />,
		},
		{
			path: "/Gallery",
			element: <GALLERY />,
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
