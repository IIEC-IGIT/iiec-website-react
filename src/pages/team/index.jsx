import { useState,useEffect} from 'react';
import "./style.css";
import logo from '../../assets/group-iiec.jpg'
import { collection, getDocs, query } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

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
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <FontAwesomeIcon className="icons" icon={faLink} style={{ color: "#ecda13" }} />
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


function Members({buttons}){
    const [member, setMember] = useState([]);
    const [activeButton, setActiveButton] = useState(null);
    const dataArray1 = [];
    const fetchMembers = async () => {
        
        try {
          const querySnapshot1 = await getDocs(query(collection(db, "team")));
          querySnapshot1.forEach((doc) => {
              dataArray1.push(doc.data());
            });         
          
          //  setMember(dataArray1);
        } catch (error) {
          console.error('Error fetching Events:', error);
        }
      };
     fetchMembers();
     const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
        selectedMember(buttonText);
       
      };
      function selectedMember(year){
        const filteredData = dataArray1.filter((data) => data.year === year && data.role != "Faculty Coordinator");
            setMember(filteredData);
     }
   
    return(
        
            <div align="center">
                   <div>
        {buttons.map((buttonText, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(buttonText)}
            className={`border-button ${activeButton === buttonText ? 'active' : ''}`}
          >
            {buttonText}
          </button>
          
        ))
        
        }
        
      </div>
      <br></br>
              
            <br></br>
           
            <div >
    
    <div className="image-container">
                 <div className="flex gap-8 flex-wrap justify-center">
                {member.map((item, index) => (
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
                
            <br></br>
           
            </div>
    );
}
function Team() {
    
    const buttons = ['2023','2024', '2025', '2026', '2027'];
    return(
        <div>
            <div>
            <img src={logo}></img>
           <h3 className='absolute-heading'>
            IIEC Team
           </h3>
            </div>
           

            <div>
           <Members  buttons={buttons} ></Members>
            </div>




        </div>
    );
	
}

export default Team;
