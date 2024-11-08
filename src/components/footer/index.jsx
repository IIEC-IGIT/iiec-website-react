import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	const developers = [
		{ id: 1, name: "Shaktijit",
		 link: "https://deathcrafter.dev/",
		photoUrl: "https://media.licdn.com/dms/image/C4D03AQGhGiAUnosY4w/profile-displayphoto-shrink_800_800/0/1606456681855?e=1706140800&v=beta&t=VkIo64X9cFA3iBs6tOpN74gQQ9xfrtUTmXKWwGhDUJc" },
		{ id: 2, name: "Biswajit",
		 link: "https://biswajit-sahu-portfolio.vercel.app/",
		photoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJjvebdC1g1iq4fhyKVuifnhfB6xeFbx6Yvtf5tB06iZSo=s96-c-rg-br100" },
		
		// Add more developers as needed
	  ];
	return (
		<footer className="relative p-8 flex flex-col justify-center items-center mt-20">
			<div className="card bg-neutral-focus w-72 lg:w-[48rem]">
				<div className="card-body">
					<div className="flex justify-around">
						<a
							href="https://www.linkedin.com/company/idea-innovation-and-entrepreneurship-cell-igit-sarang"
							target="__blank"
							className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-neutral-content text-neutral-content hover:bg-neutral-content hover:text-neutral-focus transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-linkedin"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</a>
						<a
							href="https://x.com/IIEC_igit"
							target="__blank"
							className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-neutral-content text-neutral-content hover:bg-neutral-content hover:text-neutral-focus transition-colors"
						>
							<FontAwesomeIcon icon={faXTwitter} fontSize={28} />
						</a>
						<a
							href="https://www.instagram.com/iiec_igit/"
							target="__blank"
							className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-neutral-content text-neutral-content hover:bg-neutral-content hover:text-neutral-focus transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-instagram"
							>
								<rect
									x="2"
									y="2"
									width="20"
									height="20"
									rx="5"
									ry="5"
								></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line
									x1="17.5"
									y1="6.5"
									x2="17.51"
									y2="6.5"
								></line>
							</svg>
						</a>
					</div>
					<p className="mt-8 text-center text-neutral-content">
						&copy; 2024 - Idea, Innovation & Entrepreneuership Cell,
						IGIT Sarang
					</p>
				</div>
			</div>
			 <p className="text-neutral-content hover:text-accent transition-colors justify-center">
				Made with ❤️ by{" "}
				<a
					href="https://www.instagram.com/iiec_igit/"
					target="__blank"
					className="text-neutral-content hover:text-accent transition-colors"
				>
					IIEC
				</a>
			</p> 

			<p className="text-neutral-content hover:text-accent transition-colors justify-center">Developers</p>
			<div className="mt-3 flex gap-4 justify-around">
			
        {developers.map((developer) => (
          <div key={developer.id} className="flex flex-col items-center">
			 <a href={developer.link} target="__blank">
            <img
              src={developer.photoUrl}
              alt={developer.name}
              className="w-11 h-11 rounded-full mb-2"
            />
            {/* <p className="text-neutral-content hover:text-accent transition-colors justify-center">{developer.name}</p> */}
			</a>
          </div>
        ))}
      </div>
		</footer>
	);
}

export default Footer;

