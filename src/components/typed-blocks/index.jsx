import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

function TypedBlocks({
	typeSpeed = 50,
	backSpeed = 50,
	delay = 0,
	strings,
	element: Element,
	classNames = [],
}) {
	const typedRef = useRef([]);

	useEffect(() => {
		const typed = [];
		let i = 0;
		let incrDelay = 0;
		strings.forEach((string) => {
			const j = i;

			typed[i] = new Typed(typedRef.current[i], {
				strings: [string],
				typeSpeed,
				backSpeed,
				startDelay: incrDelay,
				showCursor: false,
				// onStart() {
				// 	console.log({ id: j, start: new Date() });
				// },
				onBegin() {
					console.log({ id: j, start: new Date() });
				},
				onComplete() {
					console.log({ id: j, end: new Date() });
				},
			});

			const parsedStr = string
				.replace(/&amp;/g, "&")
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
				.replace(/&quot;/g, '"')
				.replace(/&#039;/g, "'");

			incrDelay += typeSpeed * parsedStr.length + delay;

			console.log({
				index: j + 1,
				parsedStr,
				calc: `${typeSpeed} * ${parsedStr.length} + ${delay}`,
				incrDelay,
			});

			i++;
		});

		return () => {
			typed.forEach((typed_) => typed_.destroy());
		};
	}, []);

	return (
		<>
			{strings.map((_, i) => (
				<Element
					key={i}
					ref={(el) => (typedRef.current[i] = el)}
					className={classNames[i] || ""}
				></Element>
			))}
		</>
	);
}

export default TypedBlocks;
