"use client";
import Header from "@/components/header";
import Display from "@/components/display";
import Board from "@/components/board";
import styles from "./page.module.css";
import { useEffect } from "react";

function handleThemeChange(selectedOption: number) {
	document.body.className = "";
	const theme = `color-scheme-${selectedOption}`;
	document.body.classList.add(theme);
	localStorage.setItem("theme", String(selectedOption));
}

function handleBoardClick(event: any) {
	const { btn } = event.detail;
	if (!btn) {
		console.error("Could not read board click");
	}

	console.log(btn);
}

export default function Home() {
	useEffect(() => {
		const themeNumber = Number(localStorage.getItem("theme") ?? 1);
		document.body.className = "";
		const theme = `color-scheme-${themeNumber}`;
		document.body.classList.add(theme);

		document.addEventListener("boardClick", handleBoardClick);
		document.addEventListener("multiToggleChange", (event: any) => {
			handleThemeChange(event.detail.selected ?? 1);
		});
	}, []);

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
