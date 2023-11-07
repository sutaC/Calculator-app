import styles from "./board.module.css";

export default function Board() {
	return (
		<div className={styles.board}>
			<div className={styles.key}>7</div>
			<div className={styles.key}>8</div>
			<div className={styles.key}>9</div>
			<div className={(styles.key, styles.secondary)}>del</div>
			<div className={styles.key}>4</div>
			<div className={styles.key}>5</div>
			<div className={styles.key}>6</div>
			<div className={styles.key}>+</div>
			<div className={styles.key}>1</div>
			<div className={styles.key}>2</div>
			<div className={styles.key}>3</div>
			<div className={styles.key}>-</div>
			<div className={styles.key}>.</div>
			<div className={styles.key}>0</div>
			<div className={styles.key}>/</div>
			<div className={styles.key}>x</div>
			<div className={(styles.key, styles.secondary)}>reset</div>
			<div className={(styles.key, styles.primary)}>=</div>
		</div>
	);
}
