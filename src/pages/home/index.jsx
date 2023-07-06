import { forwardRef, useEffect, useRef, useState } from "react";
import TypedBlocks from "../../components/typed-blocks";
import "pattern.css/dist/pattern.min.css";
import "./style.css";
import Typed from "typed.js";



  
  

const StyledIIECText = forwardRef(({ children, className, ...rest }, ref) => {
	return (
		<p
			ref={ref}
			style={{ fontFamily: "Space Grotesk" }}
			className={`text-neutral-content font-bold text-center ${className}`}
			{...rest}
		>
			{children}
		</p>
	);
});

const IIECHero = () => {
	const typedjsRef = useRef();
	useEffect(() => {
		const typed = new Typed(typedjsRef.current, {
			strings: ["IDEATE", "INNOVATE", "IMPLEMENT"],
			typeSpeed: 60,
			backSpeed: 40,
			backDelay: 1000,
			loop: true,
			showCursor: false,
			smartBackspace: true,
		});

		console.log(typed);

		return () => typed.destroy();
	}, []);
	return (
		<section
			id="home-hero"
			className="relative flex flex-col items-center justify-center w-full h-screen"
		>
			<div className="relative flex flex-col items-center justify-center gap-3">
				<p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-accent">
					{"• "}
					<span ref={typedjsRef}></span>
					{" •"}
				</p>
				<StyledIIECText className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
					IDEA, INNOVATION
				</StyledIIECText>
				<StyledIIECText className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
					& ENTREPRENUERSHIP CELL
				</StyledIIECText>
				<StyledIIECText className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
					IGIT SARANG
				</StyledIIECText>
			</div>
		</section>
	);
};

const HomeGalleryItem = ({ src, alt, selected, ...rest }) => (
	<div
		className={`w-60 md:w-72 lg:w-80 aspect-square rounded-lg bg-neutral-focus ${
			selected ? "border-4" : ""
		} border-primary-content`}
		{...rest}
	>
		<img src={src} alt={alt} className="w-full h-full object-contain" />
	</div>
);

function Achievements({}) {

	const [selected, setSelected] = useState(0);
	

	
	const achievements = [
		{
			image: "https://i.imgur.com/v1Vo3um.png",
			title: "Achievement 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
		},
		{
			image: "https://i.imgur.com/v1Vo3um.png",
			title: "Achievement 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed viverra tellus.",
		},
		{
			image: "https://i.imgur.com/v1Vo3um.png",
			title: "Achievement 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, eget nunc, sed viverra tellus.",
		},
	];
	return (
		<section
			id="home-achievements"
			className="relative flex flex-col items-center gap-8 p-16"
		>
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				Recent Achievements
			</h1>
			<div className="flex gap-8 flex-wrap justify-center">
				{achievements.map((achievement, index) => (
					<HomeGalleryItem
						key={index}
						src={achievement.url}
						alt={achievement.event_name}
						selected={selected == index}
						onMouseEnter={() => setSelected(index)}
					/>
				))}
			</div>
			<div className="text-neutral-content">
				<h3 className="text-lg font-medium text-center">
					{achievements[selected].title}
				</h3>
				<p className="text-center mt-3">
					{achievements[selected].description}
				</p>
			</div>
		</section>
	);
}

function UpcomingEvents({}) {
	const [selected, setSelected] = useState(0); // [0, 1, 2
	const events = [
		{
			title: "Event 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			date: "12/12/2021",
			image: "https://resources.finalsite.net/images/f_auto,q_auto/v1541010395/thehillorg/awi1phm4adlubuvhuhub/2018-Jade-Johnson-College-Seminar2.jpg",
		},
		{
			title: "Event 2",
			description:
				"Lorem ipsum dolor sit amet. Eget nunc, sed viverra tellus.",
			date: "12/12/2021",
			image: "https://resources.finalsite.net/images/f_auto,q_auto/v1541010395/thehillorg/awi1phm4adlubuvhuhub/2018-Jade-Johnson-College-Seminar2.jpg",
		},
		{
			title: "Event 3",
			description:
				"Lorem ipsum dolor sit amet. X justo, eget nunc, sed viverra tellus.",
			date: "12/12/2021",
			image: "https://resources.finalsite.net/images/f_auto,q_auto/v1541010395/thehillorg/awi1phm4adlubuvhuhub/2018-Jade-Johnson-College-Seminar2.jpg",
		},
		{
			title: "Event 3",
			description:
				"Lorem ipsum dolor sit amet. X justo, eget nunc, sed viverra tellus.",
			date: "12/12/2021",
			image: "https://resources.finalsite.net/images/f_auto,q_auto/v1541010395/thehillorg/awi1phm4adlubuvhuhub/2018-Jade-Johnson-College-Seminar2.jpg",
		},
	];

	return (
		<section
			id="home-upcoming-events"
			className="relative flex flex-col items-center gap-8 p-16 bg-neutral"
		>
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				Upcoming Events
			</h1>
			<div className="flex gap-8 flex-wrap justify-center">
				{events.map((event, index) => (
					<HomeGalleryItem
						key={index}
						src={event.image}
						alt={"upcoming-event-" + index}
						selected={selected == index}
						onMouseEnter={() => setSelected(index)}
					/>
				))}
			</div>
			<div className="text-neutral-content">
				<h3 className="text-lg font-medium text-center">
					{events[selected].title}
				</h3>
				<p className="text-xs text-center">
					Dt: {events[selected].date}
				</p>
				<p className="text-center">{events[selected].description}</p>
			</div>
		</section>
	);
}

function Gallery({}){
	const photos = [
		'https://firebasestorage.googleapis.com/v0/b/iiec-website-2023.appspot.com/o/Gallery%2F1680506152347-web-screenshot-14-03-2023.jpg?alt=media&token=41436df8-67eb-46db-b406-468923ef7cb6',
		'https://firebasestorage.googleapis.com/v0/b/iiec-website-2023.appspot.com/o/Gallery%2F1680506152347-web-screenshot-14-03-2023.jpg?alt=media&token=41436df8-67eb-46db-b406-468923ef7cb6',
		'https://firebasestorage.googleapis.com/v0/b/iiec-website-2023.appspot.com/o/Gallery%2F1680506152347-web-screenshot-14-03-2023.jpg?alt=media&token=41436df8-67eb-46db-b406-468923ef7cb6',
		'https://firebasestorage.googleapis.com/v0/b/iiec-website-2023.appspot.com/o/Events%2F1680604349133-Screenshot%202023-04-03%20235229.png?alt=media&token=0b3b6347-db68-40f7-a168-be11b44ac2eb',
		'https://firebasestorage.googleapis.com/v0/b/iiec-website-2023.appspot.com/o/Events%2F1680604349133-Screenshot%202023-04-03%20235229.png?alt=media&token=0b3b6347-db68-40f7-a168-be11b44ac2eb',
		
	  ];
	  return (
		<div  align="center">
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				Gallery
			</h1>
			<br></br>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			IIEC brings to its participants a host of events, ranging from immersive talks to exciting competitions!
			</p>
			<br></br>

			
<div className="photo-gallery">


{photos.map((photo, index) => (
  <div className="photo-wrapper" key={index}>
	<img src={photo} alt={`Photo ${index}`} />
  </div>
))}
</div>
		</div>
		
	);
}
function Home({}) {
	




	return (
		<>
			<div className="fixed h-full w-full grid grid-cols-2 text-primary-content opacity-[0.10] z-0">
				<div className="col-span-1 pattern-cross-dots-md"></div>
				<div className="col-span-1 pattern-diagonal-lines-md"></div>
				<div className="col-span-1 pattern-horizontal-lines-sm"></div>
				<div className="col-span-1 pattern-cross-dots-xl"></div>
			</div>
			<IIECHero />
			<section
				id="home-about"
				className="relative flex flex-col items-center gap-5 p-16 bg-neutral"
			>
				<h1 className="text-4xl font-bold text-neutral-content text-center">
					About Us
				</h1>
				<p className="text-primary-content text-center text-lg max-w-prose">
					Idea, Innovation and Entrepreneurship Cell (IIEC) is a
					student body of IGIT Sarang which aims to promote the
					culture of innovation and entrepreneurship among the
					students of the institute. The cell is a part of the
					National Entrepreneurship Network (NEN) and is supported by
					the Wadhwani Foundation. The cell is also supported by the
					Entrepreneurship Development Institute of India (EDII),
					Ahmedabad and the Department of Science and Technology
					(DST), Government of India.
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
					aliquam eum dolore reiciendis, illum alias, commodi aliquid
					quia quam quos dolor. Nihil sed facilis error minus
					temporibus quo, nemo consectetur?
				</p>
			</section>
			<Achievements />
			<UpcomingEvents />
			<Gallery/>
		</>
		
		
	);
}

export default Home;
