"use client";
import { useState } from "react";
import styles from "./multiToggle.module.css";

export default function MultiToggle(params: { states: number }) {
	if (params.states < 1) {
		throw Error("States number must be greater than 0");
	}

	const states: JSX.Element[] = [];

	const [selectedOption, setSelectedOption] = useState(1);
	const toggles: JSX.Element[] = [];
	for (let i = 0; i < params.states; i++) {
		states.push(
			<label key={i} htmlFor={"toggleBox-" + (i + 1)}>
				{i + 1}
			</label>
		);
		toggles.push(
			<input
				className={styles.toggleBox}
				id={"toggleBox-" + (i + 1)}
				type='radio'
				key={i}
				name='toggle'
				value={i + 1}
				checked={selectedOption === i + 1}
				onChange={(event: any) => {
					setSelectedOption(Number(event.target.value));
					document.dispatchEvent(
						new CustomEvent("multiToggleChange", {
							detail: {
								selected: Number(event.target.value),
							},
						})
					);
				}}
			></input>
		);
	}

	return (
		<div className={styles.multiToggle} data-size={params.states}>
			<div className={styles.headers}>{states}</div>
			<div className={styles.toggle}>{toggles}</div>
		</div>
	);
}
