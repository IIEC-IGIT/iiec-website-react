import { useState } from 'react';
//import database from './firebase';
//import {uid} from "uid";
import "./style.css";
import { color } from 'framer-motion';
import {addDoc,collection} from 'firebase/firestore'
import {db} from "../../firebase/firebaseConfig";
import { storage } from '../../firebase/firebaseStorage';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function App() {
  //for events
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [links, setLinks] = useState('');
  const [url, setUrl] = useState('');
  const [progresspercent, setProgresspercent] = useState(0);
  //for ach
  const [achName_ach, setAchName_ach] = useState('');
  const [details_ach, setDetails_ach] = useState('');
  const [date_ach, setDate_ach] = useState('');
  const [links_ach, setLinks_ach] = useState('');
  const [url_ach, setUrl_ach] = useState('');
  const [progresspercent_ach, setProgresspercent_ach] = useState(0);
  //for gallery
  const [url_gall, setUrl_gall] = useState('');
  const [progresspercent_gall, setProgresspercent_gall] = useState(0);
  //for team members
  const [imgurl_team, setImgurl_team] = useState('');
  const [name_team, setName_team] = useState('');
  const [role_team, setRole_team] = useState('');
  const [year_team, setYear_team] = useState('');
  const [insta_team, setInsta_team] = useState('');
  const [linkedin_team, setLinkedin_team] = useState('');
  const [progresspercent_team, setProgresspercent_team] = useState(0);
  //for announcement
  const [title_ann, setTitle_ann] = useState('');
  const [desc_ann, setDesc_ann] = useState('');
 // const [time_ann, setTime_ann] = useState('');
  const [file_ann, setFile_ann] = useState('');
  const [progresspercent_ann, setProgresspercent_ann] = useState(0);

  //events
	const saveEvent = async (e) => {
        e.preventDefault();
        const currTime = new Date().toLocaleTimeString();
        const storageRef = ref(storage, `events/${url.name+"_"+currTime}`);
        const uploadTask = uploadBytesResumable(storageRef, url);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             
              const coll = collection(db, 'events');
              addDoc(coll,{
                event_name: eventName,
                      date:date,
                links:links,
                url:downloadURL
              }).then(response => {
                alert("event added");
                setEventName("");
                setLinks("");
                setUrl("");
                setDate("");
                setProgresspercent(0);
                }).catch(error=>{
                  console.log(error.message)
                });

            });
          }
        );
     
    };
	//ach
	const saveAchievement = (e) => {
        e.preventDefault();
        const currTime = new Date().toLocaleTimeString();
        const storageRef = ref(storage, `achievements/${url_ach.name+"_"+currTime}`);
        const uploadTask = uploadBytesResumable(storageRef, url_ach);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setProgresspercent_ach(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             
             
            	const coll = collection(db, 'achievements');
		addDoc(coll,{
			achievement_name: achName_ach,
            date:date_ach,
			links:links_ach,
			url:downloadURL,
			details:details_ach
		}).then(response => {
			alert("achievement added");
			setAchName_ach("");
			setDetails_ach("");
			setDate_ach("");
			setLinks_ach("");
			setUrl_ach("");
      setProgresspercent_ach(0);
			}).catch(error=>{
				console.log(error.message)
			});
       

            });
          }
        );
     
    };
  //gallery
  const saveGallery = async (e) => {
    e.preventDefault();
    const currTime = new Date().toLocaleTimeString();
    const storageRef = ref(storage, `gallery/${url_gall.name+"_"+currTime}`);
    const uploadTask = uploadBytesResumable(storageRef, url_gall);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent_gall(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         
         
          const coll = collection(db, 'gallery');
          addDoc(coll,{
            url:downloadURL
          }).then(response => {
            alert("photo added");
            
            setUrl_gall("");
           
            }).catch(error=>{
              console.log(error.message)
            });

        });
      }
    );
 
};
  //Team
  const saveMember = async (e) => {
    e.preventDefault();
    if(year_team=="" ){
      alert("Select batch year")
      return;
    }
    if(role_team==""){
      alert("Select Member Role");
      return;
    }
    const currTime = new Date().toLocaleTimeString();
    const storageRef = ref(storage, `team/${imgurl_team.name+"_"+name_team+"_"+year_team+"_"+currTime}`);
    const uploadTask = uploadBytesResumable(storageRef, imgurl_team);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent_team(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         
         
          const coll = collection(db, 'team');
          addDoc(coll,{
            name:name_team,
            year:year_team,
            role:role_team,
            insta_link:insta_team,
            linkedin_link:linkedin_team,
            img_url:downloadURL
          }).then(response => {
            alert("Club Member added");
            
            setLinkedin_team("");
            setInsta_team("");
            setYear_team("");
            setRole_team("");
            setName_team("");
            setImgurl_team("");
            setProgresspercent_team(0);
            }).catch(error=>{
              console.log(error.message)
            });

        });
      }
    );
 
};
  //Announcement
const addAnnouncement = async (e) => {
  e.preventDefault();
  if(title_ann=="" ){
    alert("Enter title.")
    return;
  }
  if(desc_ann==""){
    alert("Enter desc.");
    return;
  }
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear());
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const time_ann=`${day}-${month}-${year}-${hours}:${minutes}`;
  if(file_ann.name!=undefined){
    const currTime = new Date().toLocaleTimeString();
    const storageRef = ref(storage, `announcement/${file_ann.name+"_"+currTime}`);
    const uploadTask = uploadBytesResumable(storageRef, file_ann);
    
  
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent_ann(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         
          const coll = collection(db, 'announcement');
          addDoc(coll,{
            title:title_ann,
            desc:desc_ann,
            time:time_ann,
            file_url:downloadURL
          }).then(response => {
            alert("Notice added.");
            setTitle_ann("");
            setDesc_ann("");
            setFile_ann("");
            setProgresspercent_ann(0);
            }).catch(error=>{
              console.log(error.message)
            });
  
        });
      }
    );
  }else{
    
    const coll = collection(db, 'announcement');
          addDoc(coll,{
            title:title_ann,
            desc:desc_ann,
            time:time_ann,
            file_url:""
          }).then(response => {
            alert("Notice added.");
            setTitle_ann("");
            setDesc_ann("");
            setFile_ann("");
            setProgresspercent_ann(0);
            }).catch(error=>{
              console.log(error.message)
            });
  }
 

};
	
const options = ['Faculty Coordinator', 'Student Ambassador', 'Core Member'];

const startYear = 2023;
const numberOfYears = 10;
const years = [];

for (let i = 0; i < numberOfYears; i++) {
  years.push((startYear + i).toString());
}

	return (
		
		<div className="App"  >
      
		 <form onSubmit={saveEvent} className="event-form">
    
			<div  className="i">
			<label  style={{ marginTop: '20px' }} htmlFor="head">Upload Event:</label>
			</div>
		 <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </div>
     
      <div>
        <label htmlFor="links">Links:</label>
        <input
          type="text"
          id="links"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="file"
          
          accept="image/*"
          
          onChange={(e) => setUrl(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Submit </button>
      <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
    </form>
   

	<form onSubmit={saveAchievement} className="event-form">
			<div  className="i">
			<label htmlFor="head">Upload Achievement:</label>
			
			</div>
		 <div>
        <label>Date:</label>
        <input
          type="date"
         
          value={date_ach}
          onChange={(e) => setDate_ach(e.target.value)}
          required
        />
      </div>
      <div>
        <label >Achievement Name:</label>
        <input
          type="text"
          
          value={achName_ach}
          onChange={(e) => setAchName_ach(e.target.value)}
          required
        />
      </div>
	  <div>
        <label >Achievement Details:</label>
        <input
          type="text"
          value={details_ach}
          onChange={(e) => setDetails_ach(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Links:</label>
        <input
          type="text"
         
          value={links_ach}
          onChange={(e) => setLinks_ach(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="file"
          
          onChange={(e) => setUrl_ach(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Submit</button>
      <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent_ach}%` }}>{progresspercent_ach}%</div>
        </div>
    </form>


    <form onSubmit={saveGallery} className="event-form">
			<div  className="i">
			<label htmlFor="head">Upload Gallery Photos:</label>
			
			</div>
      <div>
        <label>URL:</label>
        <input
          type="file"
          
          onChange={(e) => setUrl_gall(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Submit</button>
      <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent_gall}%` }}>{progresspercent_gall}%</div>
        </div>
    </form>


    <form onSubmit={saveMember} className="event-form">
			<div  className="i">
			<label htmlFor="head">Add New Member:</label>
			
			</div>
      <div>
        <label >Member Name:</label>
        <input
          type="text"
          
          value={name_team}
          onChange={(e) => setName_team(e.target.value)}
          required
        />
      </div>
		 <div>
        <label>Batch Year:</label>
       <div>
       
          <select className="custom-select" value={year_team}
            onChange={(e) => setYear_team(e.target.value)}
            required> 
              
              {years.map((option, index) => {
              return <option key={index} style={{ color: 'black' }}>
              {option}

              </option>
            })}
          </select>

       </div>
      </div>
     
	  <div>
        <label >Member Role:</label>
        <div>

        <select className="custom-select" value={role_team}
          onChange={(e) => setRole_team(e.target.value)}
          required> 
        
          {options.map((option, index) => {
            return <option key={index} style={{ color: 'black' }}>
         {option}

     </option>
      })}
        </select>
      </div>
      </div>
      <div>
        <label>Linkedin Link:</label>
        <input
          type="text"
         
          value={linkedin_team}
          onChange={(e) => setLinkedin_team(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Instagram Link:</label>
        <input
          type="text"
          value={insta_team}
          onChange={(e) => setInsta_team(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Member Photo:</label>
        <input
          type="file"
          
          onChange={(e) => setImgurl_team(e.target.files[0])}
          required
        />
      </div>

     
      <button type="submit">Submit</button>
      <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent_team}%` }}>{progresspercent_team}%</div>
        </div>
    </form>

    <form onSubmit={addAnnouncement} className="event-form">
			<div  className="i">
			<label htmlFor="head">Add Announcement:</label>
			</div>
      <div>
        <label >Notice Title:</label>
        <input
          type="text"
          value={title_ann}
          onChange={(e) => setTitle_ann(e.target.value)}
          required
        />
      </div>
      <div>
        <label >Notice Description:</label>
        <input
          type="text"
          value={desc_ann}
          onChange={(e) => setDesc_ann(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Notice File if any:</label>
        <input
          type="file"
          onChange={(e) => setFile_ann(e.target.files[0])}
          
        />
      </div>

      <button type="submit">Submit</button>
      <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent_ann}%` }}>{progresspercent_ann}%</div>
        </div>
    </form>
		</div>
	);
}

export default App;
