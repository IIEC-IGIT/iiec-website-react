import { firestore } from "@/firebase";

export default async function getMembers({ role = "" }) {
	const members = await firestore.getCollection("members");
	members.sort((a, b) => {
		if (a.year < b.year) return -1;
		else if (a.year > b.year) return 1;
		else if (a.name > b.name) return 1;
		else if (a.name < b.name) return -1;
		else return 0;
	});

	const domains = [];

	members.forEach((member) => {
		if (!domains.includes(member.domain)) domains.push(member.domain);
	});

	domains.sort();

	return {
		domains,
		members: members.filter(({ role: r = "" }) => r == role),
	};
}
