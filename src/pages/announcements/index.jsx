import { useEffect, useState } from "react";
import SectionHeading from "@/components/section-heading";
import { firestore } from "@/firebase";
import { Helmet } from "react-helmet";

export default function AnnouncementsPage() {
	const [announcements, setAnnouncements] = useState([]);

	useEffect(() => {
		firestore.getCollection("announcements").then((announcements) => {
			setAnnouncements(announcements);
		});
	}, []);

	return (
		<main className="relative">
			<Helmet title="Announcements • IIEC, IGIT Sarang" />
			<div id="nav-placeholder" className="h-20"></div>
			<SectionHeading heading="Announcements" />
			<div className="flex flex-col gap-6 mt-20 w-72 lg:w-[48rem] mx-auto">
				{announcements.length > 0 ? (
					announcements.map(
						({
							_id,
							title,
							description,
							date,
							link = undefined,
							image = undefined,
						}) => (
							<div
								className="card card-side bg-neutral-focus shadow-xl w-full"
								key={_id}
							>
								<div className="card-body">
									<h2 className="card-title text-neutral-content">
										{title}
									</h2>
									<p className="card-subtitle text-xs text-neutral-content opacity-70">
										{date}
									</p>
									<p className="card-text text-neutral-content">
										{description}
									</p>
									<div className="card-actions mt-3">
										{link ? (
											<a
												target="_blank"
												className="hover:underline text-accent"
												href={link}
											>
												More
											</a>
										) : null}
									</div>
								</div>
								{image ? (
									<figure className="w-[25%]">
										<img
											src={image}
											alt={title}
											className="object-cover w-full h-full"
										/>
									</figure>
								) : null}
							</div>
						)
					)
				) : (
					<p className="text-center text-primary-content">
						No announcements yet!
					</p>
				)}
			</div>
		</main>
	);
}
