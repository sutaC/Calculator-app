"use client";
import Header from "@/components/header";
import Display from "@/components/display";
import Board from "@/components/board";
import styles from "./page.module.css";

function handleThemeChange(selectedOption: number) {
	document.body.className = "";
	const theme = `color-scheme-${selectedOption}`;
	document.body.classList.add(theme);
	localStorage.setItem("theme", String(selectedOption));
}

export default function Home() {
	document.addEventListener("multiToggleChange", (event: any) => {
		handleThemeChange(event.detail.selected ?? 1);
	});
	handleThemeChange(Number(localStorage.getItem("theme") ?? 1));

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
