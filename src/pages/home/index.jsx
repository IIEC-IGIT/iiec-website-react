import { forwardRef, useEffect, useRef, useState } from "react";
import TypedBlocks from "../../components/typed-blocks";
import "pattern.css/dist/pattern.min.css";
import "./style.css";
import Typed from "typed.js";

import { collection, getDocs, where, query ,orderBy, limit} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink,faHammer,faLightbulb,faComments,faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import linkedin_logo from '../../assets/linkedin.svg';
import insta from '../../assets/instagram.svg';
  

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

const HomeGalleryItem = ({ src, alt, selected,event_name,date, ...rest }) => (
	<div>
<div
		className={`w-60 md:w-72 lg:w-80 aspect-square rounded-lg bg-neutral-focus ${
			selected ? "border-4" : ""
		} border-primary-content`}
		{...rest}
	>
		<img src={src} alt={alt} className="w-full h-full object-contain" />
	</div>

	{selected && (
       <div className="text-neutral-content">
	   <h3 className="text-lg font-medium text-center">
		   {event_name}
	   </h3>
	   <p className="text-xs text-center">
		   {date}
	   </p>
   
   </div>
      )}
	
	</div>
	
);

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

function WhatWeDo({}){
	return(
		<div  align="center">
			<br/>
			<div>
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				What we Do
			</h1>
			<br></br>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			IIEC brings to its participants a host of events, ranging from immersive talks to exciting competitions!
			</p>
			<br></br>
			<div className="horizontal-line"></div>
			</div>
			<br/>
			<div className="what-we-do-section" >
				
				<div >
				<FontAwesomeIcon className="icons" icon={faHammer} style={{color: "#ecda13",}} />
			
				<h1 className="text-2xl font-bold text-neutral-content text-center">
				Hackathon
			</h1>
			<br/>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			IGIT's IIEC club presents an exhilarating hackathon, encouraging participants to collaborate, innovate, and solve challenges. Join us for skill growth, networking, and the chance to showcase your talents to industry professionals in a dynamic and competitive environment.
				</p>
				</div>

				<div >
				
				<FontAwesomeIcon className="icons" icon={faComments} style={{color: "#ecda13",}} />
				<h1 className="text-2xl font-bold text-neutral-content text-center">
				Campus Hangouts
			</h1>
			<br/>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			Hangouts is special interactive session specifically targeting the campus students. The session is like an informal discussion between campus junta and entrepreneurship oracles of varied arenas. It involves discussions and brainstorming on entrepreneurship matters. Throughout the year multiple hangout sessions are organised.
			</p>
				</div>
				
				

				<div >
				<FontAwesomeIcon className="icons" icon={faChalkboardUser} style={{color: "#ecda13",}} />
				
				<h1 className="text-2xl font-bold text-neutral-content text-center">
				Startup Master Class
			</h1>
			<br/>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			The Startup Master Class offers a transformative experience for aspiring entrepreneurs. Gain insights, guidance, and practical knowledge from industry experts, enabling you to navigate the startup ecosystem with confidence and unlock your entrepreneurial potential.
			</p>
				</div>

				<div >
				
				<FontAwesomeIcon className="icons" icon={faLightbulb} style={{color: "#ecda13",}} />
				<h1 className="text-2xl font-bold text-neutral-content text-center">
				Idea Competition
			</h1>
			<br/>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			The Idea Competition is an inspiring platform for innovators to showcase their groundbreaking ideas. Participate and receive valuable feedback, mentorship, and the opportunity to turn your ideas into reality. Join us and unleash your creative potential in a supportive and competitive environment.
			</p>
				</div>
			
			</div>



		</div>
	)
}

function Achievements({}) {

	const [achievements, setAchievements] = useState([]);
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		const fetchAchievements = async () => {
		  try {
			const dataArray = [];
			const q = query(collection(db, "achievements"), orderBy("date"), limit(3));
    		const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
			  dataArray.push(doc.data());
			});
			dataArray.reverse();
			setAchievements(dataArray);
		  } catch (error) {
			console.error('Error fetching achievements:', error);
		  }
		};
	
		fetchAchievements();
	  }, []);





	return (
		<section
			id="home-achievements"
			className="relative flex flex-col items-center gap-8 p-16"
		>
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				Recent News
			</h1>
			<div className="flex gap-8 flex-wrap justify-center">
				{achievements.map((achievement, index) => (
					<HomeGalleryItem
						key={index}
						src={achievement.url}
						alt={achievement.achievement_name}
						selected={selected == index}
						onMouseEnter={() => setSelected(index)}
						event_name={achievement.achievement_name}
						date={achievement.details}
					/>
				))}
			</div>
			
		</section>
	);
}

function UpcomingEvents({}) {
	
	const [events, setEvents] = useState([]);
	const [selected, setSelected] = useState(0);
	const navigate = useNavigate();
	const gotoAllEvent = () => {
	  
	 navigate('/Events');
	};
	useEffect(() => {
		const fetchEvents = async () => {
		  try {
			const dataArray = [];
			const q = query(collection(db, "events"), orderBy("date"), limit(3));
    		const querySnapshot = await getDocs(q);
		
			querySnapshot.forEach((doc) => {
			  dataArray.push(doc.data());
			});
			dataArray.reverse();
			setEvents(dataArray);
		  } catch (error) {
			console.error('Error fetching Events:', error);
		  }
		};
	
		fetchEvents();
	  }, []);

	return (
		<section
			id="home-upcoming-events"
			className="relative flex flex-col items-center gap-8 p-16 bg-neutral"
		>
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				Club Events
			</h1>
			<div className="flex gap-8 flex-wrap justify-center">
				{events.map((event, index) => (
					<HomeGalleryItem
						key={index}
						src={event.url}
						alt={"upcoming-event-" + index}
						selected={selected == index}
						onMouseEnter={() => setSelected(index)}
						event_name={event.event_name}
						date={event.date}
					/>
				))}
			</div>
			
			<br></br>
			<button className="border-button" onClick={gotoAllEvent}>All Events</button>
			
		</section>
		
	);
}

function Gallery({}){
	const navigate = useNavigate();
	const gotoGallery = () => {
		
		navigate('/Gallery');
	  };

	const [gallery, setGallery] = useState([]);
	
	
	useEffect(() => {
		const fetchGallery = async () => {
		  try {
			const dataArray = [];
			const q = query(collection(db, "gallery"), limit(7));
    		const querySnapshot = await getDocs(q);
			
			querySnapshot.forEach((doc) => {
			  dataArray.push(doc.data());
			});
			setGallery(dataArray);
		  } catch (error) {
			console.error('Error fetching Gallery Photos:', error);
		  }
		};
	
		fetchGallery();
	  }, []);
	  
	  return (
		<section
		id="home-upcoming-events"
		className="relative flex flex-col items-center gap-8 p-16 bg-neutral"
	>
		<div  align="center">
			
			<h1 className="text-4xl font-bold text-neutral-content text-center">
				Gallery
			</h1>
			<br></br>
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose">
			IIEC brings to its participants a host of events, ranging from immersive talks to exciting competitions!
			</p>
			<br></br>

			
<div className="photo-gallery">


{gallery.map((photo, index) => (
  <div className="photo-wrapper" key={index}>
	<img src={photo.url} alt={`Photo ${index}`} />
  </div>
))}
</div>

<br></br>

		</div>
		<button className="border-button" onClick={gotoGallery}>All Photos</button>
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
			
			const querySnapshot1 = await getDocs(query(collection(db, "team"), where("role", "==", "Faculty Coordinator")));
			querySnapshot1.forEach((doc) => {
				dataArray1.push(doc.data());
			  });
			  setFaculty(dataArray1);
			const querySnapshot2 = await getDocs(query(collection(db, "team"), where("role", "==", "Student Ambassador")));
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
				
				<h1 className="text-4xl font-bold text-neutral-content text-center">
				Team
			</h1>
			
			<p  align="center" className="text-primary-content text-center text-lg max-w-prose" >
			Contact us for any queries, questions, or ideas.</p>
			
			<div >
			<div className="image-container">
				 <div className="flex gap-8 flex-wrap justify-center">
				{faculty.map((item, index) => (
					<MembersItem
						key={index}
						src={item.img_url}
						name={item.name}
						role={item.role}
						linkedin={item.linkedin_link}
						instlink={item.insta_link}
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
						src={item.img_url}
						name={item.name}
						role={item.role}
						linkedin={item.linkedin_link}
						instlink={item.insta_link}
					/>
				))}
			
			</div>
			
			
    
	</div>

	

			</div>
				
			
			
			<button className="border-button" onClick={gotoTeam}>All Members</button>
			
			</section>
	);
}

function EmailForm({}){
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	  });
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
		  ...prevFormData,
		  [name]: value,
		}));
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
		// You can handle form submission here (e.g., send data to the server or perform some action)
		console.log(formData);
	  };
	  const inputStyle = {
		border: '2px solid white',
		padding: '8px',
		margin: '5px',
		borderRadius: '5px',
    	backgroundColor: 'neutral',
	  };
	
	return (
		<section id="home-upcoming-events"
		className="relative flex flex-col items-center gap-8 p-16 bg-neutral" >
				
		  <div style={{ display: 'flex', flexDirection: 'row' ,margin: 10,}}>
		  <div>
      <h1 className="text-4xl font-bold text-neutral-content">
        Contact Us
      </h1>
      
      <p className="text-primary-content text-lg max-w-prose">
        Share your idea or suggestion with us through your Email.If you have any Query then contact us through
		Email - iiec_igit@gmail.com.
      </p>
    </div>
		  <div className="flex gap-8 flex-wrap justify-center">
		  <form onSubmit={handleSubmit} >
			
			<div >
			  <label  className="text-primary-content text-center text-lg max-w-prose" htmlFor="name">Name:</label>
			  <input 
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				
				required
			  />
			</div>
	
			<div>
			<label  className="text-primary-content text-center text-lg max-w-prose" htmlFor="name">Email:</label>
			  <input
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				required
			  />
			</div>
	
			<div>
			<label  className="text-primary-content text-center text-lg max-w-prose" htmlFor="name">Subject:</label>
			  <input
				type="text"
				id="subject"
				name="subject"
				value={formData.subject}
				onChange={handleChange}
				required
			  />
			</div>
	
			<div>
			<label  className="text-primary-content text-center text-lg max-w-prose" htmlFor="name">Message:</label>
			  <textarea
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				required
			  />
			</div>
	
			<div>
		
			<button type="submit">Submit</button>

			</div>
		  </form>
		  </div>



		  </div>
		 


		</section>
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
			<WhatWeDo/>
			<Achievements />
			<UpcomingEvents />
			<Gallery/>
			<Team/>
			{/* <EmailForm></EmailForm> */}
		</>
		
		
	);
}

export default Home;
