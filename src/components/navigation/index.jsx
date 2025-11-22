import { NavLink } from "react-router-dom";
import IIECLogo from "../../assets/iiec-logo.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = [
	{ to: "/announcements", label: "Announcements" },
	{ to: "/achievements", label: "Achievements" },
	{ to: "/events", label: "Events" },
	{ to: "/gallery", label: "Gallery" },
	{ to: "/team", label: "Team" },
	{ to: "/form", label: "Mentorship Form" },
	{ to: "/contact", label: "Contact" },
];

function BrandLogo({ colorClass }) {
	return (
		<NavLink to="/">
			<div
				className={`h-10 w-10 ${colorClass}`}
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

function ThemeButton({ colorClass }) {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className={`btn btn-ghost btn-sm btn-circle ${colorClass}`}
			onClick={() =>
				setTheme((th) =>
					th === "iiec_light" ? "iiec_dark" : "iiec_light"
				)
			}
		>
			{theme === "iiec_light" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
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
					width="20"
					height="20"
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
	const { theme } = useTheme();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (scrollY.get() > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	});

	// Determine styles based on theme
	const isDark = theme === "iiec_dark";

	// Floating Glass Styles
	// Always floating pill shape, centered
	const containerClasses = `fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl px-4 py-2 flex items-center justify-between`;

	// Background & Border
	// Dark: Black with low opacity + blur
	// Light: White with low opacity + blur
	const bgClasses = isDark
		? "bg-black/40 border border-white/10 backdrop-blur-md shadow-lg"
		: "bg-white/60 border border-black/5 backdrop-blur-md shadow-lg";

	// Text/Icon Color
	const textColorClass = isDark ? "text-white" : "text-black";
	const logoColorClass = isDark ? "bg-white" : "bg-black";
	const hoverClass = isDark ? "hover:bg-white/10" : "hover:bg-black/5";

	return (
		<nav className={`${containerClasses} ${bgClasses}`}>
			{/* Left: Logo */}
			<BrandLogo colorClass={logoColorClass} />

			{/* Center: Desktop Links (Hidden on Mobile) */}
			<div className="hidden lg:flex items-center gap-1">
				{NAV_LINKS.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`px-4 py-2 rounded-full text-sm font-medium transition-all ${textColorClass} ${hoverClass} ${isActive ? "bg-opacity-20 font-bold" : "bg-opacity-0"
							} ${isActive && isDark ? "bg-white/20" : ""} ${isActive && !isDark ? "bg-black/10" : ""}`
						}
					>
						{link.label}
					</NavLink>
				))}
			</div>

			{/* Right: Theme Toggle & Mobile Menu */}
			<div className="flex items-center gap-2">
				<ThemeButton colorClass={textColorClass} />

				{/* Mobile Menu Dropdown (Hidden on Desktop) */}
				<div className="dropdown dropdown-end lg:hidden">
					<label
						tabIndex={0}
						className={`btn btn-ghost btn-sm btn-circle ${textColorClass}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
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
						className={`menu dropdown-content p-2 shadow-lg rounded-box w-52 mt-4 ${isDark ? "bg-base-200 text-white" : "bg-white text-black"}`}
					>
						{NAV_LINKS.map((link) => (
							<li key={link.to}>
								<NavLink
									to={link.to}
									className={({ isActive }) =>
										`${isActive ? "font-bold bg-base-300" : ""}`
									}
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
