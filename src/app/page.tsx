import Header from "@/components/header";
import Display from "@/components/display";
import Board from "@/components/board";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<Header></Header>

				<Display text='2137'></Display>

				<Board></Board>
			</main>
		</>
	);
}
