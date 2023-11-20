import Achievements from "@/components/acheivements";
import SectionHeading from "@/components/section-heading";
import { Helmet } from "react-helmet";

export default function AchievementsPage() {
	return (
		<main>
			<Helmet title="Achievements • IIEC, IGIT Sarang" />
			<div id="nav-placeholder" className="h-20"></div>
			<section
				id="home-achievements"
				className="relative flex flex-col items-center gap-6 p-4"
			>
				<SectionHeading
					heading="Recent Achievements"
					subheading="we did it, together"
				/>
				<Achievements  />
			</section>
		</main>
	);
}
