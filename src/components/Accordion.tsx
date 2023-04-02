import { useEffect, useRef, useState } from "react";

type Props = {
	firstOpened?: boolean;
	text: string;
};

export default function Accordion({ firstOpened = false, text }: Props) {
	const content = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useState(firstOpened);
	const [height, setHeight] = useState(firstOpened ? "auto" : "0px");
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function toggleIsOpen() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		if (content?.current) {
			setHeight(isOpen ? `${content.current.scrollHeight}px` : "0px");
		}
	}, [isOpen, screenWidth]);

	return (
		<div className="flex flex-col border border-blue-500 rounded-xl overflow-hidden">
			<div
				className="bg-blue-500 text-white p-4 select-none cursor-pointer"
				onClick={toggleIsOpen}
			>
				AccordionHeader
			</div>
			<div
				ref={content}
				style={{ maxHeight: height }}
				className="overflow-hidden transition-all duration-300"
			>
				<div className="p-4 bg-blue-50">
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
}
