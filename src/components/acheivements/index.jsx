import { useEffect, useState } from "react";
import RevealOnView from "../revealOnView";
import { motion } from "framer-motion";
import { firestore } from "@/firebase";

async function getAchievements() {
	return await firestore.getCollection("achievements");
}

function AchievementsItem({ achievement, ...rest }) {
	const { achievement_name, date, details, links, url } = achievement;

	return (
		<RevealOnView>
			<motion.div
				initial="unhovered"
				whileHover="hovered"
				className={`relative w-60 md:w-72 lg:w-80 aspect-square rounded-lg overflow-hidden bg-neutral-focus border-primary-content`}
				{...rest}
			>
				<motion.img
					src={url}
					alt={achievement_name}
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
							{achievement_name}
						</h3>
						<p className="text-neutral-content opacity-70 text-center">
							{date}
						</p>
						{/* <div className="flex gap-4">
                                {links.map((link) => (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-2xl text-neutral-content hover:text-primary-content"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div> */}
					</div>
				</motion.div>
			</motion.div>
		</RevealOnView>
	);
}

function Achievements({ number = Infinity }) {
	const [achievements, setAchievements] = useState([]);

	useEffect(() => {
		getAchievements().then((data) =>
			setAchievements(
				data.length > number
					? data.slice(0, number === Infinity ? undefined : number)
					: data
			)
		);
	}, []);

	return (
		<div className="flex gap-8 flex-wrap justify-center">
			{achievements.map((achievement) => (
				<AchievementsItem
					key={achievement._id}
					achievement={achievement}
				/>
			))}
		</div>
	);
}

export default Achievements;
