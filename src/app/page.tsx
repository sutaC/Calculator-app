"use client";
import Header from "@/components/header";
import Display from "@/components/display";
import Board from "@/components/board";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
	let bd = "";
	const [board, setBoard] = useState(bd);

	function handleBoardClick(event: any) {
		const { btn } = event.detail;
		if (!btn) {
			console.error("Could not read board click");
		}

		const sides = bd.split(/[x\/+-]/);
		const last = sides[sides.length - 1];

		switch (btn) {
			case "RESET":
				bd = "";
				break;
			case "DEL":
				if (bd.length > 0) {
					bd = bd.substring(0, bd.length - 1);
				}
				break;
			case "+" || "x" || "/" || "-":
				// TODO
				if (
					bd.includes("+") ||
					bd.includes("-") ||
					bd.includes("x") ||
					bd.includes("/")
				) {
					break;
				}
				bd += btn === "x" ? "*" : btn;
				break;
			default:
				if (last[last.length - 1] === "0" && last.length <= 1) {
					bd = bd.substring(0, bd.length - 1);
				}
				bd += btn;
				break;
		}
		setBoard(bd);
	}

	function handleThemeChange(selectedOption: number) {
		document.body.className = "";
		const theme = `color-scheme-${selectedOption}`;
		document.body.classList.add(theme);
		localStorage.setItem("theme", String(selectedOption));
	}

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

				<Display text={board}></Display>

				<Board></Board>
			</main>
		</>
	);
}
