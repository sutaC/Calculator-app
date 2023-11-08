import styles from "./board.module.css";

function handleClick(event: any) {
	const btn = event.target.innerText;
	document.dispatchEvent(new CustomEvent("boardClick", { detail: { btn } }));
}

function handleKeyClick(event: KeyboardEvent) {
	let key = event.key.toLocaleUpperCase();

	if (key === "BACKSPACE") {
		key = "DEL";
	} else if (key === "ENTER") {
		key = "=";
	}

	if (!key.match(/[0-9\,\.\/x\*\-\+\=]/) && key !== "DEL") {
		return;
	}

	event.preventDefault();
	document.dispatchEvent(
		new CustomEvent("boardClick", { detail: { btn: key } })
	);
}

export default function Board() {
	document.body.addEventListener("keyup", handleKeyClick);

	return (
		<div className={styles.board}>
			<button className={styles.key} onClick={handleClick}>
				7
			</button>
			<button className={styles.key} onClick={handleClick}>
				8
			</button>
			<button className={styles.key} onClick={handleClick}>
				9
			</button>
			<button
				className={`${styles.key} ${styles.secondary}`}
				onClick={handleClick}
			>
				del
			</button>
			<button className={styles.key} onClick={handleClick}>
				4
			</button>
			<button className={styles.key} onClick={handleClick}>
				5
			</button>
			<button className={styles.key} onClick={handleClick}>
				6
			</button>
			<button className={styles.key} onClick={handleClick}>
				+
			</button>
			<button className={styles.key} onClick={handleClick}>
				1
			</button>
			<button className={styles.key} onClick={handleClick}>
				2
			</button>
			<button className={styles.key} onClick={handleClick}>
				3
			</button>
			<button className={styles.key} onClick={handleClick}>
				-
			</button>
			<button className={styles.key} onClick={handleClick}>
				.
			</button>
			<button className={styles.key} onClick={handleClick}>
				0
			</button>
			<button className={styles.key} onClick={handleClick}>
				/
			</button>
			<button className={styles.key} onClick={handleClick}>
				x
			</button>
			<button
				className={`${styles.key} ${styles.secondary} ${styles.double} ${styles.left}`}
				onClick={handleClick}
			>
				reset
			</button>
			<button
				onClick={handleClick}
				className={`${styles.key} ${styles.primary} ${styles.double} ${styles.right}`}
			>
				=
			</button>
		</div>
	);
}
