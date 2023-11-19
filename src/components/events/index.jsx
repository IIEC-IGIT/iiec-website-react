import { useEffect, useState } from "react";
import RevealOnView from "../revealOnView";
import { motion } from "framer-motion";
import { firestore } from "@/firebase";


async function getEvents() {
	return await firestore.getCollection("events");
	
	
}

// async function getEvents() {
//   try {
//     // Assuming 'firestore' has a method 'getCollection' that returns a Firestore collection reference
//     const collectionRef = await firestore.collection("events"); // Use collection instead of getCollection

//     // Query the collection and order the results by the 'date' field in ascending order
//     const querySnapshot = await collectionRef.orderBy('date').get();

//     // Extract the data from the query snapshot
//     const events = querySnapshot.docs.map(doc => doc.data());

//     // Return the ordered events
//     return events;
//   } catch (error) {
//     console.error("Error getting events:", error);
//     throw error; // You might want to handle errors appropriately in your application
//   }
// }

// Usage example
(async () => {
  try {
    const orderedEvents = await getEventsOrderedByDate();
    console.log(orderedEvents);
  } catch (error) {
    console.error("Error in main:", error);
  }
})();

function EventsItem({ event, ...rest }) {
	const { date, title, description, image } = event;

	return (
		<RevealOnView>
			<motion.div
				initial="unhovered"
				whileHover="hovered"
				className={`relative w-60 md:w-72 lg:w-80 aspect-square rounded-lg overflow-hidden bg-neutral-focus border-primary-content`}
				{...rest}
			>
				<motion.img
					src={image}
					alt={description}
					variants={{
						unhovered: {
							scale: 1,
							transition: {
								duration: 0.5,
							},
						},
						hovered: {
							scale: 1.1,
							transition: {
								duration: 0.25,
							},
						},
					}}
					className="w-full h-full object-contain"
				/>
				<motion.div
					variants={{
						unhovered: {
							opacity: 0,
						},
						hovered: {
							opacity: 1,
						},
					}}
					className="bg-primary w-full h-full absolute top-0 left-0 opacity-0 bg-opacity-70 backdrop-blur"
				>
					<div className="flex flex-col justify-center items-center h-full">
						<h3 className="text-xl font-medium text-neutral-content text-center">
							{title}
						</h3>
						<p className="text-neutral-content opacity-70 text-center">
							{date}
						</p>
					</div>
				</motion.div>
			</motion.div>
		</RevealOnView>
	);
}

function Events({ number = Infinity }) {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		getEvents().then((events) =>
			setEvents(
				events.length > number
					? events.slice(0, number === Infinity ? undefined : number)
					: events
			)
		);
	}, []);

	return (
		<>
			<div className="flex gap-8 flex-wrap justify-center">
				{events.map((event) => (
					<EventsItem key={event._id} event={event} />
				))}
			</div>
		</>
	);
}

export default Events;
