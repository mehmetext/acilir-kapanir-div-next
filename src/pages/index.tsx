import Accordion from "@/components/Accordion";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Açılır Kapanır Div - Mehmet Konukçu</title>
				<meta
					name="description"
					content="Açılır Kapanır Div - Mehmet Konukçu"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex w-screen h-screen justify-center items-center">
				<div className="flex flex-col w-2/3 gap-4">
					<Accordion
						firstOpened
						text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio quo ducimus laboriosam velit voluptas omnis illo tempora. Vero natus aliquam pariatur quae, incidunt excepturi! Error eos earum velit eveniet."
					/>
					<Accordion text="Lorem ipsum dolor sit amet." />
				</div>
			</div>
		</>
	);
}
