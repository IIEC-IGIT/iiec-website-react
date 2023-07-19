import {useEffect, useState } from "react";
import "./style.css";
import { collection, getDocs, query ,orderBy} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
const EventItem = ({ url, event_name, date, ...rest }) => {
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
          
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} className={`w-60 md:w-72 lg:w-80 aspect-square rounded-lg bg-neutral-focus ${
            isHovered ? "border-4" : ""
          } border-primary-content`}
          {...rest}
        >
          <img src={url} className={isHovered ? "image" : ""} />
         
        </div>
        {isHovered && (
          <div>
            <h3 className="text-1xl font-bold text-neutral-content text-center">
           {event_name}
          </h3> 
          <h3 className="text-1xl font-bold text-neutral-content text-center">
          {date}
         </h3> 
            </div>
           
          )}
      </div>
    );
 
    
          };
function Events() {
   
              const [events, setEvents] = useState([]);
            
              useEffect(() => {
                  const fetchEvents = async () => {
                    try {
                      const dataArray = [];
                      const q = query(collection(db, "events"), orderBy("date"));
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

  
    return(
        <div> 
            <br></br>
            <br></br>
       <br></br>
       <br></br>
       
            <h3 className="text-4xl font-bold text-neutral-content text-center">
        All Events
       </h3>
       <br></br>
       <br></br>
       
       <div className="flex gap-8 flex-wrap justify-center">
                {events.map((item, index) => (
                    <EventItem
                        key={index}
                        url={item.url}
                        event_name={item.event_name}
                        date={item.date}
                       
                      
                    />
                ))}
            
            </div>
        </div>
    );
	
}

export default Events;
