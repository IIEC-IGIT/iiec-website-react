export default function ThemedHeading({ level = "h2", className = "", children }) {
	const Tag = level;

	return (
		<Tag className={`themed-heading text-neutral-content ${className}`}>
			{children}
		</Tag>
	);
}
