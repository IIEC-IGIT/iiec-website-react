import { useState } from "react";
import MemberCard from "../../../components/member-card";
import MemberDetailModal from "../../../components/member-detail-modal";
import ThemedHeading from "../../../components/themed-heading";
import getMembers from "../../../actions/members/get";

const resolveMembersData = () => {
	let status = "pending";
	let result;

	const resolving = getMembers({ role: "ambassador" })
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

export default function Ambassadors({ selectedYear }) {
	const membersData = getMembersData();
	const [selectedMember, setSelectedMember] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// safety if membersData or members missing
	const allMembers = membersData?.members ?? [];

	// If selectedYear === "all", don't filter by year
	// selectedYear is passout year (e.g., 2026), database also stores passout year
	// Convert database year to number for comparison (Firebase might store as string)
	const filtered = selectedYear === "all"
		? allMembers
		: allMembers.filter((m) => {
			const memberYear = m.year || m.years; // Handle both field names
			const memberYearNum = typeof memberYear === 'string' ? parseInt(memberYear, 10) : memberYear;
			return memberYearNum === selectedYear;
		});

	console.log(`Ambassadors - Selected Year: ${selectedYear}, Total: ${allMembers.length}, Filtered: ${filtered.length}`);

	const handleMemberClick = (member) => {
		setSelectedMember(member);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedMember(null), 300); // Clear after animation
	};

	// When no members, render a friendly message
	if (!filtered.length) {
		return (
			<section id="ambassadors" className="mb-16">
				<ThemedHeading level="h2" className="text-3xl font-bold text-center mb-6">Ambassadors</ThemedHeading>
				<div className="text-center py-12">
					<p className="text-base-content opacity-50 text-lg">No ambassadors found for the selected batch.</p>
				</div>
			</section>
		);
	}

	return (
		<>
			<section id="ambassadors" className="mb-16">
				<ThemedHeading level="h2" className="text-3xl font-bold text-center mb-6">Ambassadors</ThemedHeading>

				<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
					{filtered.map((member) => (
						<MemberCard
							key={member._id}
							member={member}
							onClick={handleMemberClick}
						/>
					))}
				</div>
			</section>

			{/* Member Detail Modal */}
			<MemberDetailModal
				member={selectedMember}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</>
	);
}
