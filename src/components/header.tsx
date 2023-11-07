import styles from "./header.module.css";
import MultiToggle from "./multiToggle";

export default function Header() {
	return (
		<header>
			<h1>calc</h1>

			<div className='wrap'>
				<p>theme</p>
				<MultiToggle states={3}></MultiToggle>
			</div>
		</header>
	);
}
