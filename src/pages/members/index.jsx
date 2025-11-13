import { Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import CoreMembers from "./core-members";
import Ambassadors from "./ambassadors";
import logo from "../../assets/group-iiec.jpg";

export default function MembersPage() {
	// default is "all" so members show immediately
	const [selectedYear, setSelectedYear] = useState("all");

	// Passout years (values). Display labels stay as "2020–24"
	const passoutYears = [2025, 2024, 2023, 2022, 2021, 2020];

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
			<div className="flex justify-center mb-6">
				<select
					className="border p-2 rounded text-black dark:text-white dark:bg-gray-800"
					value={selectedYear}
					onChange={(e) => {
						// keep numeric years as numbers, keep "all" as string
						const val = e.target.value === "all" ? "all" : Number(e.target.value);
						setSelectedYear(val);
					}}
				>
					<option value="all">All batches</option>
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
				{/* Pass selectedYear to both components */}
				<Ambassadors selectedYear={selectedYear} />
				<CoreMembers selectedYear={selectedYear} />
			</Suspense>
		</main>
	);
}
