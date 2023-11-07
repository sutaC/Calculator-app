import Header from "@/components/header";
import Display from "@/components/display";
import Board from "@/components/board";

export default function Home() {
	return (
		<>
			<Header></Header>
			<Display text='2137'></Display>
			<Board></Board>
		</>
	);
}
