import { useState,useEffect } from 'react';
import "./style.css";
import logo from './group.jpg'



import { collection, getDocs, where, query } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
const MembersItem = ({ src, name, role, linkedin, instlink, alt, selected, ...rest }) => (
	
	<div>
		<div className="member-container" >
		<img src={src} alt={alt} className="image" />
		<a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
		<FontAwesomeIcon className="icons" icon={faLink} style={{color: "#ecda13",}} />
      </a>
	</div>
	<h3 className="text-2xl font-bold text-neutral-content text-center">
	{name}
	</h3>
	<h3 className="text-primary-content text-center text-lg max-w-prose">
	{role}
	</h3>
	</div>
	
);
function Members({}){

      
    const [member, setMember] = useState([]);


    useEffect(() => {
        const fetchMembers = async () => {
          try {
            const dataArray1 = [];
           
            
            const querySnapshot1 = await getDocs(query(collection(db, "team"), where("role", "!=", "Faculty Coordinator")));
            querySnapshot1.forEach((doc) => {
                dataArray1.push(doc.data());
              });
              setMember(dataArray1);
           
            
          } catch (error) {
            console.error('Error fetching Events:', error);
          }
        };
    
        fetchMembers();
      }, []);


    return(
            <div align="center">
                <br></br>
                <h1 className="text-4xl font-bold text-neutral-content text-center">
                Batch 2024
            </h1>
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
  
  
    
    return(
        <div>
            <div >
            <img src={logo}></img>
           <h3 className='absolute-heading'>
            IIEC Team
           </h3>
            </div>
            <div className="year-box">
                <button className="border-button">2024</button>
                <button className="border-button">2025</button>
                <button className="border-button">2026</button>
                <button className="border-button">2027</button>
            </div>

            <div>
           <Members></Members>
            </div>




        </div>
    );
	
}

export default Team;
