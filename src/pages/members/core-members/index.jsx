import {
	faGithub,
	faInstagram,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import getMembers from "../../../actions/members/get";

function SocialLinkButton({ link }) {
	const icons = {
		instagram: faInstagram,
		github: faGithub,
		linkedin: faLinkedinIn,
		twitter: faXTwitter,
		website: faGlobe,
	};
	return (
		<a href={link.url} target="_blank" rel="noreferrer">
			<FontAwesomeIcon
				className="text-neutral-content hover:text-accent text-3xl"
				icon={icons[link.name]}
			/>
		</a>
	);
}

function Member({ member }) {
	const variants = { unhovered: {}, hovered: {} };

	return (
		<motion.div
			className="relative h-80 w-60 flex flex-col justify-center items-center gap-3"
			variants={variants}
			transition={{ type: "tween" }}
			initial="unhovered"
			whileHover="hovered"
		>
			<motion.div
				className="absolute top-0 left-0 h-full w-full rounded-xl bg-primary"
				variants={{ unhovered: { scale: 1 }, hovered: { scale: 1.05 } }}
			/>

			<motion.div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-2">
				<div className="flex justify-between">
					<motion.div
						className="rounded-tl-xl border-t-4 border-l-4 border-accent"
						variants={{
							unhovered: { width: "6rem", height: "3rem" },
							hovered: { width: "3rem", height: "6rem" },
						}}
					/>
				</div>
				<div className="flex justify-between">
					<motion.div
						className="rounded-br-xl border-r-4 border-b-4 border-accent"
						variants={{
							unhovered: { width: "6rem", height: "3rem" },
							hovered: { width: "3rem", height: "6rem" },
						}}
					/>
				</div>
			</motion.div>

			<motion.div className="relative h-40 aspect-square rounded-xl">
				<motion.img
					className="h-full w-full rounded-xl object-cover"
					src={member.avatar}
					alt={member.name}
				/>
				<motion.div
					className="absolute top-0 left-0 h-full w-full rounded-xl flex justify-center items-center gap-4 backdrop-blur-md backdrop-brightness-75"
					variants={{ unhovered: { opacity: 0 }, hovered: { opacity: 1 } }}
				>
					{(member.links || []).map((link) => (
						<SocialLinkButton key={link.name} link={link} />
					))}
				</motion.div>
			</motion.div>

			<p className="text-center text-sm font-bold text-primary-content" title={member.name}>
				{member.name}
				<br />
				<span className="text-xs font-medium">
					{member.year - 4}-{member.year.toString().slice(2)}
				</span>
			</p>
		</motion.div>
	);
}

const resolveMembersData = () => {
	let status = "pending";
	let result;

	const resolving = getMembers({ role: "member" })
		.then((members) => {
			status = "success";
			result = members;
		})
		.catch((error) => {
			status = "error";
			result = error;
		});

	return () => {
		if (status === "pending") throw resolving;
		if (status === "error") throw result;
		return result;
	};
};

const getMembersData = resolveMembersData();

export default function CoreMembers({ selectedYear }) {
	const membersData = getMembersData();

	const domains = membersData?.domains ?? [];
	const allMembers = membersData?.members ?? [];

	// For each domain render filtered members; if selectedYear === "all", don't filter
	return domains.map((domain) => {
		const filtered = (selectedYear === "all"
			? allMembers
			: allMembers.filter((m) => m.domain === domain && m.year === selectedYear)
		).filter((m) => m.domain === domain); // ensure domain matching when "all"

		return (
			<section key={domain} id={domain} className="mb-16">
				<h2 className="text-2xl font-bold text-center mb-6">{domain}</h2>
				<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
					{filtered.length ? (
						filtered.map((member) => <Member key={member._id} member={member} />)
					) : (
						<div className="w-full text-center text-sm text-gray-600">
							No members found for this domain / batch.
						</div>
					)}
				</div>
			</section>
		);
	});
}
