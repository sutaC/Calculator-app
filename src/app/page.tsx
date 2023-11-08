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

		if (bd.match(/[a-zA-Z]/)) {
			bd = "";
		}
		const sides = bd.split(/[\*\/\+\-]/);
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
			case "+":
			case "x":
			case "*":
			case "/":
			case "-":
				if (bd.match(/[\/\+\*\-]/) || bd.length === 0) {
					break;
				}
				bd += btn === "x" ? "*" : btn;
				break;
			case ".":
			case ",":
				if (last.match(/\.\,/) || last.length === 0) {
					break;
				}
				bd += ".";
				break;
			case "=":
				let num1: number | undefined, num2: number | undefined;
				try {
					num1 = Number(sides[0]);
					num2 = Number(sides[1]);
				} catch (error) {
					console.error(error);
					break;
				}
				const action = bd.match(/[\/\+\*\-]/);
				if (
					num1 === undefined ||
					num2 === undefined ||
					action == undefined
				) {
					break;
				}

				try {
					switch (action[0]) {
						case "+":
							bd = String(num1 + num2);
							break;
						case "*":
							bd = String(
								Math.round(num1 * num2 * 100000) / 100000
							);
							break;
						case "/":
							bd = String(
								Math.round((num1 / num2) * 100000) / 100000
							);
							break;
						case "-":
							bd = String(num1 - num2);
							break;
					}
				} catch (error) {
					console.error(error);
					break;
				}
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
