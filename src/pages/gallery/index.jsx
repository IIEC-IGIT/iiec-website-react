import Gallery from "@/components/gallery";
import SectionHeading from "@/components/section-heading";
import { Helmet } from "react-helmet";

export default function GalleryPage() {
	return (
		<main>
			<Helmet title="Gallery • IIEC, IGIT Sarang" />
			<div id="nav-placeholder" className="h-20"></div>
			<section className="relative flex flex-col items-center gap-6">
				<SectionHeading
					heading="Gallery"
					subheading="us, caught in 4k"
				/>
				<Gallery />
			</section>
		</main>
	);
}
