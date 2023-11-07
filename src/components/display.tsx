import styles from "./display.module.css";

export default function Display(params: { text: string }) {
	return (
		<div className={styles.display}>
			<span>{params.text}</span>
		</div>
	);
}
