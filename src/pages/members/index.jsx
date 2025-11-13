import React, { Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import CoreMembers from "./core-members";
import Ambassadors from "./ambassadors";
import logo from '../../assets/group-iiec.jpg'

export default function MembersPage() {
  const [year, setYear] = useState("All");

  // Adjust this list or compute dynamically as needed
  const years = ["All", "2025", "2024", "2023"];

  return (
    <main>
      <div>
        <img src={logo} alt="IIEC group" />
      </div>
      <Helmet title="Team • IIEC, IGIT Sarang" />
      <div id="nav-placeholder" className="h-20"></div>

      {/* Year filter */}
      <div className="mx-4 my-6 flex items-center gap-4">
        <label htmlFor="year-filter" className="font-medium">
          Filter by year:
        </label>
        <select
          id="year-filter"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded px-3 py-1"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

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
        {/* Pass the selected year as a prop. Child components should filter based on this prop. */}
        <Ambassadors year={year} />
        <CoreMembers year={year} />
      </Suspense>
    </main>
  );
}
