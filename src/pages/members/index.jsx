import { Suspense, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import CoreMembers from "./core-members";
import Ambassadors from "./ambassadors";
import logo from "../../assets/group-iiec.jpg";
import { firestore } from "../../firebase";

export default function MembersPage() {
	const [selectedYear, setSelectedYear] = useState(null);
	const [availableYears, setAvailableYears] = useState([]);
	const [loading, setLoading] = useState(true);

	// Determine current active batch based on date
	const getCurrentBatch = () => {
		const now = new Date();
		const currentYear = now.getFullYear();
		const currentMonth = now.getMonth(); // 0-11 (0 = January)

		// If we're in July (month 6) or later, use next year's batch
		// Otherwise use current year's batch
		// For example: Jan-June 2026 → 2026 batch (2022-26)
		//              July-Dec 2026 → 2027 batch (2023-27)
		if (currentMonth >= 6) {
			return currentYear + 1;
		} else {
			return currentYear;
		}
	};

	// Fetch all members and extract unique years
	useEffect(() => {
		async function fetchAvailableYears() {
			try {
				const members = await firestore.getCollection("members");

				console.log("=== DEBUGGING MEMBER DATA ===");
				console.log("Total members fetched:", members.length);
				console.log("First 3 members:", members.slice(0, 3));
				console.log("Sample member fields:", Object.keys(members[0] || {}));

				// Extract unique years from members (handle both 'year' and 'years' field)
				// These are passout years (e.g., 2026)
				// Convert to numbers since Firebase might store as strings
				const years = [...new Set(members.map(member => {
					const yearValue = member.year || member.years;
					console.log(`Member: ${member.name}, year field: ${member.year}, years field: ${member.years}, using: ${yearValue}`);
					// Convert string to number if needed
					return typeof yearValue === 'string' ? parseInt(yearValue, 10) : yearValue;
				}))];

				console.log("Extracted unique years:", years);

				// Sort years in descending order (newest first)
				years.sort((a, b) => b - a);

				setAvailableYears(years);

				// Set default to current batch
				const currentBatch = getCurrentBatch();

				console.log("Current batch (passout year):", currentBatch);

				// If current batch exists in data, use it; otherwise use the latest year
				if (years.includes(currentBatch)) {
					setSelectedYear(currentBatch);
				} else if (years.length > 0) {
					setSelectedYear(years[0]); // Use latest available year
				}

				setLoading(false);
			} catch (error) {
				console.error("Error fetching members:", error);
				setLoading(false);
			}
		}

		fetchAvailableYears();
	}, []);

	// Format text like "2020–24"
	const formatBatchLabel = (passout) => {
		const start = passout - 4;
		const endShort = String(passout).slice(2);
		return `${start}–${endShort}`;
	};

	return (
		<main>
			<div>
				<img src={logo} alt="IIEC Logo" />
			</div>

			<Helmet title="Team • IIEC, IGIT Sarang" />
			<div className="h-20"></div>

			{/* YEAR FILTER */}
			<div className="flex justify-center mb-8 relative z-50">
				<select
					className="px-6 py-3 text-lg font-semibold rounded-lg border-2 cursor-pointer transition-all hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent bg-base-100 text-base-content"
					value={selectedYear || ""}
					onChange={(e) => {
						const val = e.target.value === "all" ? "all" : Number(e.target.value);
						setSelectedYear(val);
					}}
					disabled={loading || availableYears.length === 0}
				>
					<option value="all">All batches</option>
					{availableYears.map((year) => (
						<option key={year} value={year}>
							{formatBatchLabel(year)}
						</option>
					))}
				</select>
			</div>

			<Suspense
				fallback={
					<div className="flex flex-col gap-8 h-60 justify-center items-center">
						<ReactLoading
							type="spin"
							color="#6B7280"
							height="3rem"
							width="3rem"
						/>
						<p className="text-lg font-bold opacity-75">Loading</p>
					</div>
				}
			>
				{/* Pass selectedYear to both components */}
				{selectedYear !== null && (
					<>
						<Ambassadors key={`ambassadors-${selectedYear}`} selectedYear={selectedYear} />
						<CoreMembers key={`core-${selectedYear}`} selectedYear={selectedYear} />
					</>
				)}
			</Suspense>
		</main>
	);
}
