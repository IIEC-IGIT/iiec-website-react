import { Suspense } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import CoreMembers from "./core-members";
import Ambassadors from "./ambassadors";
import logo from '../../assets/group-iiec.jpg'
export default function MembersPage() {
	return (
		
		<main>
			<div>
			<img src={logo}></img>
			</div>
			<Helmet title="Team • IIEC, IGIT Sarang" />
			<div id="nav-placeholder" className="h-20"></div>
			{/* <SectionHeading heading="Team" subheading="us in a glance" /> */}
			<Suspense
				fallback={
					<div className="flex flex-col gap-8 h-60 justify-center items-center">
						<ReactLoading
							type="spin"
							className="text-neutral-content"
							color="#6B7280"
							height="3rem"
							width="3rem"
						/>
						<p className="text-neutral-content text-lg font-bold opacity-75">
							Loading
						</p>
					</div>
				}
			>
				<Ambassadors />
				<CoreMembers />
			</Suspense>
		</main>
	);
}
