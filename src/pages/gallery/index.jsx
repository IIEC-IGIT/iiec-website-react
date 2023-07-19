

import { useNavigate } from 'react-router-dom';
import {useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query ,orderBy,limit} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";


function Gallery() {
	const navigate = useNavigate();
	

	const [gallery, setGallery] = useState([]);
	
	
	useEffect(() => {
		const fetchGallery = async () => {
		  try {
			const dataArray = [];
			const q = query(collection(db, "gallery"));
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
	  


  
    return(
        <div> 
            <br></br>
            <br></br>
       <br></br>
       <br></br>
       
            <h3 className="text-4xl font-bold text-neutral-content text-center">
        IIEC Gallery
       </h3>
       <br></br>
       <br></br>
       
	   <div  align="center">
<div className="photo-gallery">


{gallery.map((photo, index) => (
  <div className="photo-wrapper" key={index}>
	<img src={photo.url} alt={`Photo ${index}`} />
  </div>
))}
</div>

<br></br>

		</div>
        </div>
    );
	
}

export default Gallery;



