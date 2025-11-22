import { motion } from "framer-motion";

export default function MemberCard({ member, onClick }) {
	return (
		<motion.div
			className="relative w-64 cursor-pointer group"
			onClick={() => onClick && onClick(member)}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick && onClick(member);
				}
			}}
			aria-label={`View details for ${member.name}`}
			whileHover={{ y: -8 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			{/* Card Container */}
			<div className="relative overflow-hidden rounded-2xl bg-base-200 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
				{/* Avatar Section */}
				<div className="relative h-64 overflow-hidden">
					<motion.img
						src={member.avatar}
						alt={member.name}
						className="w-full h-full object-cover"
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
					/>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-base-300 via-transparent to-transparent opacity-60"></div>

					{/* Hover Overlay with "View Details" */}
					<motion.div
						className="absolute inset-0 bg-primary bg-opacity-90 flex items-center justify-center"
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
					>
						<div className="text-center">
							<div className="text-primary-content text-lg font-bold mb-2">
								Click for Details
							</div>
							<div className="text-primary-content text-sm opacity-80">
								View full profile
							</div>
						</div>
					</motion.div>
				</div>

				{/* Info Section */}
				<div className="p-4 text-center">
					<h3 className="text-lg font-bold text-base-content mb-1 line-clamp-2">
						{member.name}
					</h3>
					<p className="text-sm text-accent font-semibold">
						Batch: {member.year - 4}-{member.year.toString().slice(2)}
					</p>
				</div>

				{/* Accent Border on Hover */}
				<motion.div
					className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
					initial={{ scaleX: 0 }}
					whileHover={{ scaleX: 1 }}
					transition={{ duration: 0.3 }}
				/>
			</div>
		</motion.div>
	);
}
