import { NavLink } from "react-router-dom";
import IIECLogo from "../../assets/iiec-logo.png";
import { useTheme } from "../../contexts/ThemeContext";

function BrandLogo() {
	return (
		<NavLink to="/">
			<div
				className="h-16 w-16 bg-neutral-content"
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
				//	th === "iiec_light" ? "iiec_dark" : "iiec_light"
				th === "iiec_light" ? "iiec_dark" : "iiec_dark"
				)
			}
		>
			{/* {theme === "iiec_light" ? (
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
			)} */}
		</button>
	);
}

function Navigation() {
	return (
		<nav className="fixed flex justify-between w-full z-50 p-4">
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
						<li className="hover:text-white">
							<a 
							>Home</a>
						</li>
						<li className="hover:text-white">
							<a >Announcement</a>
						</li>
						<li className="hover:text-white">
							<a >Events</a>
						</li>
						<li className="hover:text-white">
							<a>Team</a>
						</li>
						<li className="hover:text-white">
							<a>Contact</a>
						</li>
					</ul>
				</div>
			</div>

			{/* <button className="text-neutral-content"></button> */}
		</nav>
	);
}

export default Navigation;
