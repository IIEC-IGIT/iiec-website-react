import "@/App.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import AchievementsPage from "@/pages/achivements";
import AnnouncementsPage from "@/pages/announcements";
import EventsPage from "@/pages/events";
import GalleryPage from "@/pages/gallery";
import HomePage from "@/pages/home";
import MembersPage from "@/pages/members";
import { useRoutes } from "react-router-dom";

function App() {
	const router = useRoutes([
		{
			path: "",
			element: <HomePage />,
		},
		{
			path: "achievements",
			element: <AchievementsPage />,
		},
		{
			path: "announcements",
			element: <AnnouncementsPage />,
		},
		{
			path: "events",
			element: <EventsPage />,
		},
		{
			path: "gallery",
			element: <GalleryPage />,
		},
		{
			path: "team",
			element: <MembersPage />,
		},
	]);
	return (
		<>
			<div className="fixed h-full w-full grid grid-cols-2 text-primary-content opacity-[0.10] z-0">
				<div className="col-span-1 pattern-cross-dots-md"></div>
				<div className="col-span-1 pattern-diagonal-lines-md"></div>
				<div className="col-span-1 pattern-horizontal-lines-sm"></div>
				<div className="col-span-1 pattern-cross-dots-xl"></div>
			</div>
			<Navigation />
			{router}
			<Footer />
		</>
	);
}

export default App;
