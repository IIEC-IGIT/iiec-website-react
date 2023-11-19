import Events from "@/components/events";
import SectionHeading from "@/components/section-heading";
import { Helmet } from "react-helmet";

export default function EventsPage() {
	return (
		<main>
			<Helmet title="Events • IIEC, IGIT Sarang" />
			<div id="nav-placeholder" className="h-20"></div>
			<section
				id="home-recent-events"
				className="relative flex flex-col items-center gap-6"
			>
				<SectionHeading
					heading="Events"
					subheading="we made it happen"
				/>
				<Events />
			</section>
		</main>
	);
}
