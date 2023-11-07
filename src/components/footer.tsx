import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			Challenge by
			<a
				href='https://www.frontendmentor.io?ref=challenge'
				target='_blank'
				rel='noopener noreferrer'
			>
				Frontend Mentor
			</a>
			. Coded by
			<a
				href='https://www.frontendmentor.io/profile/sutaC'
				rel='noopener noreferrer'
			>
				sutaC
			</a>
			.
		</footer>
	);
}
