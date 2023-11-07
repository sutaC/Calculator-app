import styles from "./board.module.css";

export default function Board() {
	return (
		<div className={styles.board}>
			<button className={styles.key}>7</button>
			<button className={styles.key}>8</button>
			<button className={styles.key}>9</button>
			<button className={`${styles.key} ${styles.secondary}`}>del</button>
			<button className={styles.key}>4</button>
			<button className={styles.key}>5</button>
			<button className={styles.key}>6</button>
			<button className={styles.key}>+</button>
			<button className={styles.key}>1</button>
			<button className={styles.key}>2</button>
			<button className={styles.key}>3</button>
			<button className={styles.key}>-</button>
			<button className={styles.key}>.</button>
			<button className={styles.key}>0</button>
			<button className={styles.key}>/</button>
			<button className={styles.key}>x</button>
			<button
				className={`${styles.key} ${styles.secondary} ${styles.double} ${styles.left}`}
			>
				reset
			</button>
			<button
				className={`${styles.key} ${styles.primary} ${styles.double} ${styles.right}`}
			>
				=
			</button>
		</div>
	);
}
