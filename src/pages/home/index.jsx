import {
	faChalkboardTeacher,
	faLaptopCode,
	faLightbulb,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MotionConfig, motion } from "framer-motion";
import "pattern.css/dist/pattern.min.css";
//import { forwardRef, useEffect, useRef } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";

import Typed from "typed.js";
import RevealOnView from "@/components/revealOnView";
import SectionHeading from "@/components/section-heading";
import Achievements from "../../components/acheivements";
import Events from "../../components/events";
import Gallery from "../../components/gallery";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import linkedin_logo from '../../assets/linkedin.svg';
import insta from '../../assets/instagram.svg';
import { collection, getDocs, where, query ,orderBy, limit} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
import "./style.css";

const MembersItem = ({ src, name, role, linkedin, instlink, alt, selected, ...rest }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return(
        <div>
        <div
          className="member-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={src} alt={alt} className={isHovered ? "image" : ""} />
          {isHovered && (
             <a href="#" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
               {/* <FontAwesomeIcon className="icons" icon={faLink} style={{ color: "#ecda13" }} /> */}
			  
			<a href={instlink} target="_blank" rel="noopener noreferrer" class="icon-link">
   				 <img src={insta} alt="Icon 1"></img>
  				</a>
  			  <a href={linkedin} target="_blank" rel="noopener noreferrer"  class="icon-link">
    			<img src={linkedin_logo} alt="Icon 2" ></img>
  			  </a>
             </a>
			
          )}
        </div>
        <h3 className="text-2xl font-bold text-neutral-content text-center">
          {name}
        </h3>
        <h3 className="text-primary-content text-center text-lg max-w-prose">
          {role}
        </h3>
      </div>
    );
 
	
          };

const StyledIIECText = motion(
	// eslint-disable-next-line react/display-name
	forwardRef(({ children, className, ...rest }, ref) => {
		return (
			<motion.p
				ref={ref}
				style={{ fontFamily: "Space Grotesk" }}
				className={`text-neutral-content font-bold text-center ${className}`}
				{...rest}
			>
				{children}
			</motion.p>
		);
	})
);

function IIECHero() {
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
			// startDelay: 1000,
		});

		return () => typed.destroy();
	}, []);

	const variants = {
		unmounted: () => ({
			opacity: 0,
			y: 60,
		}),
		mounted: () => ({
			opacity: 1,
			y: 0,
		}),
	};

	return (
		<section
			id="home-hero"
			className="relative flex flex-col items-center justify-center w-full h-screen"
		>
			<div className="relative flex flex-col items-center justify-center gap-3">
				<motion.p
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						delay: 1,
						duration: 0.5,
					}}
					className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center text-accent"
				>
					{"• "}
					<span ref={typedjsRef}></span>
					{" •"}
				</motion.p>
				<MotionConfig
					transition={{
						type: "linear",
						duration: 0.6,
						staggerChildren: 0.2,
					}}
				>
					<motion.div
						initial="unmounted"
						animate="mounted"
						className="flex flex-col items-center justify-center gap-3"
					>
						<StyledIIECText
							custom={0}
							variants={variants}
							className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						>
							IDEA, INNOVATION
						</StyledIIECText>
						<StyledIIECText
							custom={1}
							variants={variants}
							className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						>
							& ENTREPRENEURSHIP CELL
						</StyledIIECText>
						<StyledIIECText
							custom={2}
							variants={variants}
							className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
						>
							IGIT SARANG
						</StyledIIECText>
					</motion.div>
				</MotionConfig>
			</div>
		</section>
	);
}

function HomeAbout() {
	return (
		<section
			id="home-about"
			className="relative flex flex-col items-center gap-20 p-16 backdrop-blur"
		>
			<SectionHeading heading="Who We Are" />
			<RevealOnView>
				<p className="text-primary-content text-center text-lg max-w-prose">
				The Idea, Innovation, and Entrepreneurship Cell (IIEC) at IGIT Sarang is a dynamic student body dedicated to fostering a culture of innovation and entrepreneurship. Our mission is to inspire and empower students by providing a platform for ideation, nurturing innovative thinking, and cultivating entrepreneurial skills. Through a range of initiatives, workshops, and events, we aim to ignite the entrepreneurial spirit within the student community, encouraging them to transform ideas into impactful ventures. Join us in exploring the exciting world of innovation and entrepreneurship, where creativity meets enterprise, at IGIT Sarang's IIEC.
					<br />
					<br />
					
				</p>
			</RevealOnView>
		</section>
	);
}

function FunctionsItem({ icon, heading, content }) {
	return (
		<RevealOnView>
			<div className="col-span-1 flex flex-col items-center gap-4 h-full p-6 rounded-lg bg-primary">
				<FontAwesomeIcon
					icon={icon}
					className="text-accent w-24 h-24"
				/>
				<h3 className="text-xl font-bold text-accent">{heading}</h3>
				<p className="text-primary-content text-lg max-w-prose text-justify">
					{content}
				</p>
			</div>
		</RevealOnView>
	);
}

function Functions() {
	return (
		<section
			id="home-achievements"
			className="relative flex flex-col items-center gap-8 p-16"
		>
			<SectionHeading
				heading="What We Do"
				subheading="immersive talks to exciting competitions"
			/>
			<div className="h-6"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
				<FunctionsItem
					icon={faLaptopCode}
					heading="Hackathons"
					content={`
					IGIT's IIEC club presents an exhilarating hackathon,
					encouraging participants to collaborate, innovate, and solve
					challenges. Join us for skill growth, networking, and the
					chance to showcase your talents to industry professionals in
					a dynamic and competitive environment.
					`}
				/>
				<FunctionsItem
					icon={faPeopleGroup}
					heading="Campus Hangouts"
					content={`
					Hangouts is special interactive session specifically targeting the campus students. 
					The session is like an informal discussion between campus junta 
					and entrepreneurship oracles of varied arenas. It involves discussions and 
					brainstorming on entrepreneurship matters. 
					Throughout the year multiple hangout sessions are organised.
					`}
				/>
				<FunctionsItem
					icon={faChalkboardTeacher}
					heading="Startup Master Classes"
					content={`
					The Startup Master Class offers a transformative experience 
					for aspiring entrepreneurs. Gain insights, guidance, and 
					practical knowledge from industry experts, enabling you to 
					navigate the startup ecosystem with confidence and unlock 
					your entrepreneurial potential.
					`}
				/>
				<FunctionsItem
					icon={faLightbulb}
					heading="Ideation Workshops"
					content={`
					The Ideation Workshop is an inspiring platform for innovators 
					to showcase their groundbreaking ideas. Participate and receive 
					valuable feedback, mentorship, and the opportunity to turn your 
					ideas into reality. Join us and unleash your creative potential 
					in a supportive and competitive environment.
					`}
				/>
			</div>
		</section>
	);
}

function RecentAchievements() {
	return (
		<section
			id="home-achievements"
			className="relative flex flex-col items-center gap-8 p-16 backdrop-blur"
		>
			<SectionHeading
				heading="Recent Achievements"
				subheading="we did it, together"
			/>
			<div className="h-6"></div>
			<Achievements number={3} />
		</section>
	);
}

function RecentEvents() {
	return (
		<section
			id="home-recent-events"
			className="relative flex flex-col items-center gap-8 p-16"
		>
			<SectionHeading
				heading="Recent Events"
				subheading="we made it happen"
			/>
			<div className="h-6"></div>
			<Events number={3} />
		</section>
	);
}

function HomeGallery() {
	return (
		<section
			id="home-gallery"
			className="relative flex flex-col items-center gap-8 p-16 backdrop-blur"
		>
			<SectionHeading heading="Gallery" subheading="us, caught in 4k" />
			<div className="h-6"></div>
			<Gallery number={3} />
		</section>
	);
}
function Team({}){

	const [faculty, setFaculty] = useState([]);
	const [ambassador, setAmbassador] = useState([]);
	const navigate = useNavigate();

	const gotoTeam = () => {
	  
	  navigate('/Team');
	};
	useEffect(() => {
		const fetchMembers = async () => {
		  try {
			const dataArray1 = [];
			const dataArray2 = [];
			
			const querySnapshot1 = await getDocs(query(collection(db, "members"), where("role", "==", "coordinater")));
			querySnapshot1.forEach((doc) => {
				dataArray1.push(doc.data());
			  });
			  setFaculty(dataArray1);
			const querySnapshot2 = await getDocs(query(collection(db, "members"), where("role", "==", "ambassador")));
			querySnapshot2.forEach((doc) => {
				dataArray2.push(doc.data());
			  });
			  setAmbassador(dataArray2);
			  console.log(ambassador);
			
		  } catch (error) {
			console.error('Error fetching Events:', error);
		  }
		};
	
		fetchMembers();
	  }, []);
	
	return(
			<section id="home-upcoming-events"
			className="relative flex flex-col items-center gap-8 p-16 bg-neutral">
				
				<SectionHeading heading="Team" subheading="For Any Query or Idea Contact us" />
		
			<div >
			<div className="image-container">
				 <div className="flex gap-8 flex-wrap justify-center">
				{faculty.map((item, index) => (
					<MembersItem
						key={index}
						src={item.avatar}
						name={item.name}
						role={item.role}
						//linkedin={item.links.url}
						//instlink={item.iinks.url}
						linkedin = {item['links'][0]['url']}
						instlink = {item['links'][1]['url']}
					/>
				))}
			
			</div>
			
			
    
	</div>
	<br>
	</br>
	<div className="image-container">
				 <div className="flex gap-8 flex-wrap justify-center">
				{ambassador.map((item, index) => (
					<MembersItem
						key={index}
						src={item.avatar}
						name={item.name}
						role={item.role}
						//linkedin={item.links.url}
						//instlink={item.links.url}
						linkedin = {item['links'][0]['url']}
						instlink = {item['links'][1]['url']}
					/>
				))}
			
			</div>
			
			
    
	</div>

	

			</div>
				
			
			
			<button className="border-button" onClick={gotoTeam}>All Members</button>
			
			</section>
	);
}
function HomePage() {
	return (
		<>
			<Helmet title="Home • IIEC, IGIT Sarang" />
			<IIECHero />
			<HomeAbout />
			<Functions />
			<RecentAchievements />
			<RecentEvents />
			<HomeGallery />
			<Team/>
		</>
	);
}

export default HomePage;
