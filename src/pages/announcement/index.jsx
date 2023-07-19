import {useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query ,orderBy} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";

const AnnouncementItem = ({ title, desc,date, downloadLink, ...rest }) => {
  const downloadFile = () => {
    const fileURL = downloadLink;
    console.log(downloadLink)
    const link = document.createElement('a');
    link.href = fileURL;
    link.click();
  };
    return(
        
      <div className="card">
      <h2 className="text-1xl font-bold text-neutral-content" style={{ color: 'black' }}>{title}</h2>
      <p className="text-primary-content text-lg text-black" style={{ fontSize: '12px', fontStyle: 'italic', color: 'black' }}>
        {date}
      </p>
      <p className="text-primary-content text-lg" style={{ color: 'black' }}>
        {desc}
      </p>
      {downloadLink && (
        <button className="download-button" onClick={downloadFile}>
          View
        </button>
      )}
    </div>
    
       
       
      
    );
 
	
          };
function Announcement() {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
		const fetchNotice = async () => {
		  try {
			const dataArray = [];
			const q = query(collection(db, "announcement"), orderBy("time"));
    		const querySnapshot = await getDocs(q);
		
			querySnapshot.forEach((doc) => {
			  dataArray.push(doc.data());
			});
			dataArray.reverse();
			setNotice(dataArray);
		  } catch (error) {
			console.error('Error fetching Events:', error);
		  }
		};
	
		fetchNotice();
	  }, []);



  
    return(
        <div> 
            <br></br>
            <br></br>
       <br></br>
       <br></br>
       
            <h3 className="text-4xl font-bold text-neutral-content text-center">
        Announcement
       </h3>
       <br></br>
       <br></br>
       
            <div>
            {notice.map((item, index) => (
                    <AnnouncementItem
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        downloadLink={item.file_url}
                        date={item.time}
                    />
                ))}
            </div>
        </div>
    );
	
}

export default Announcement;
