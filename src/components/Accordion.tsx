export default function Accordion() {
	return (
		<div className="flex flex-col border border-blue-500 rounded-xl overflow-hidden">
			<div className="bg-blue-500 text-white p-4 select-none cursor-pointer">
				AccordionHeader
			</div>
			<div className="overflow-hidden transition-all duration-300">
				<div className="p-4 bg-blue-50">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						optio quo ducimus laboriosam velit voluptas omnis illo tempora. Vero
						natus aliquam pariatur quae, incidunt excepturi! Error eos earum
						velit eveniet.
					</p>
				</div>
			</div>
		</div>
	);
}
