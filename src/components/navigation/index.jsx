import { NavLink } from "react-router-dom";
import IIECLogo from "../../assets/iiec-logo.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function BrandLogo() {
	return (
		<NavLink to="/">
			<div
				className="h-12 w-12 bg-neutral-content"
				style={{
					WebkitMaskImage: `url(${IIECLogo})`,
					maskImage: `url(${IIECLogo})`,
					WebkitMaskSize: "contain",
					maskSize: "contain",
					WebkitMaskPosition: "center",
					maskPosition: "center",
					WebkitMaskRepeat: "no-repeat",
					maskRepeat: "no-repeat",
				}}
			/>
		</NavLink>
	);
}

function ThemeButton({}) {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className="btn btn-ghost rounded-btn text-neutral-content"
			onClick={() =>
				setTheme((th) =>
					th === "iiec_light" ? "iiec_dark" : "iiec_light"
				)
			}
		>
			{theme === "iiec_light" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-sun"
				>
					<circle cx="12" cy="12" r="5"></circle>
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-moon"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			)}
		</button>
	);
}

function Navigation() {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (scrollY.get() > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	});

	return (
		<nav
			className={`fixed top-0 flex items-center justify-between w-full z-50 p-4 transition-all bg-opacity-0 ${
				scrolled
					? "bg-opacity-50 bg-neutral backdrop-blur-lg"
					: "bg-transparent"
			}`}
		>
			<BrandLogo />
			<div className="flex gap-4">
				<ThemeButton />
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost rounded-btn text-neutral-content"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-menu"
						>
							<line x1="3" y1="12" x2="21" y2="12"></line>
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<line x1="3" y1="18" x2="21" y2="18"></line>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu dropdown-content p-2 shadow bg-neutral-content text-neutral rounded-box w-52 mt-2"
					>
						<li>
							<NavLink
								to="/announcements"
								className={({ isActive }) =>
									`${isActive ? "font-semibold" : ""}`
								}
							>
								Announcements
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/achievements"
								className={({ isActive }) =>
									`${isActive ? "font-semibold" : ""}`
								}
							>
								Achievements
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/events"
								className={({ isActive }) =>
									`${isActive ? "font-semibold" : ""}`
								}
							>
								Events
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/gallery"
								className={({ isActive }) =>
									`${isActive ? "font-semibold" : ""}`
								}
							>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/team"
								className={({ isActive }) =>
									`${isActive ? "font-semibold" : ""}`
								}
							>
								Team
							</NavLink>
						</li>
						<li>
							<NavLink to="/form" className={({ isActive }) => 
								`${isActive ? "font-semibold" : ""}`}>
								Mentorship Form
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									`${isActive ? "font-semibold" : ""}`
								}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
