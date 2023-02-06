import React from "react";
import styles from "./TopNav.module.scss";

const TopNav = () => {
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<p>Board</p>

				<button
					className={styles.button}
					style={{ backgroundColor: "#e00404", color: "white" }}
				>
					X-Trade
				</button>

				<button className={styles.button}>OTC</button>
				<button className={styles.button}>FI</button>
				<button className={styles.button}>Derivatives</button>
			</div>
			<div className={styles.row}>
				<p>Product</p>
				<button
					className={styles.button}
					style={{ backgroundColor: "#e00404", color: "white" }}
				>
					ALL
				</button>
				<button className={styles.button}>SMAZ</button>
				<button className={styles.button}>SBBS</button>
				<button className={styles.button}>SPRL</button>
				<button className={styles.button}>SSGN</button>
				<button className={styles.button}>SBGM</button>
				<button className={styles.button}>FETC</button>
				<button className={styles.button}>SCOC</button>
			</div>
		</div>
	);
};

export default TopNav;
