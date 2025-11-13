import { Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import CoreMembers from "./core-members";
import Ambassadors from "./ambassadors";
import logo from "../../assets/group-iiec.jpg";

export default function MembersPage() {
	const currentPassoutYear = new Date().getFullYear(); // e.g. 2025
	const [selectedYear, setSelectedYear] = useState(currentPassoutYear);

	// Passout years (values) — display will be "2020–24" etc
	const passoutYears = [2025, 2024, 2023, 2022, 2021, 2020];

	// helper to format label as "2020–24"
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

			{/* Filter UI: shows "2020–24" but value is passout year */}
			<div className="flex justify-center mb-6">
				<select
					className="border p-2 rounded text-black dark:text-white dark:bg-gray-800"
					value={selectedYear}
					onChange={(e) => setSelectedYear(Number(e.target.value))}
				>
					{passoutYears.map((year) => (
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
				<Ambassadors selectedYear={selectedYear} />
				<CoreMembers selectedYear={selectedYear} />
			</Suspense>
		</main>
	);
}
