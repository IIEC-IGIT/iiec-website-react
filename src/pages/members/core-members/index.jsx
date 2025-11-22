import { useState } from "react";
import MemberCard from "../../../components/member-card";
import MemberDetailModal from "../../../components/member-detail-modal";
import ThemedHeading from "../../../components/themed-heading";
import getMembers from "../../../actions/members/get";

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
	const [selectedMember, setSelectedMember] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const domains = membersData?.domains ?? [];
	const allMembers = membersData?.members ?? [];

	const handleMemberClick = (member) => {
		setSelectedMember(member);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedMember(null), 300); // Clear after animation
	};

	// For each domain render filtered members
	return (
		<>
			{domains.map((domain) => {
				// Filter by domain first, then by year if a specific year is selected
				// selectedYear is passout year (e.g., 2026), database also stores passout year
				// Convert database year to number for comparison (Firebase might store as string)
				const filtered = allMembers.filter((m) => {
					const domainMatch = m.domain === domain;
					const memberYear = m.year || m.years; // Handle both field names
					const memberYearNum = typeof memberYear === 'string' ? parseInt(memberYear, 10) : memberYear;
					const yearMatch = selectedYear === "all" || memberYearNum === selectedYear;
					return domainMatch && yearMatch;
				});

				console.log(`Domain: ${domain}, Selected Year: ${selectedYear}, Filtered count: ${filtered.length}`);

				// Only render this section if there are members
				if (filtered.length === 0) {
					return null; // Don't render empty sections
				}

				return (
					<section key={domain} id={domain} className="mb-16">
						<ThemedHeading className="text-2xl font-bold text-center mb-6">{domain}</ThemedHeading>
						<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
							{filtered.map((member) => (
								<MemberCard
									key={member.name}
									member={member}
									onClick={() => handleMemberClick(member)}
								/>
							))}
						</div>
					</section>
				);
			})}

			{/* Member Detail Modal */}
			<MemberDetailModal
				member={selectedMember}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</>
	);
}
