import React from "react";
import Header from "../src/components/Header";
import styles from "./Main.module.scss";
import Sidebar from "./components/Sidebar";
import Orderbook from "./pages/Orderbook";
import LiveMarket from "./components/LiveMarket";

function Main() {
	return (
		<div className={styles.container}>
			<Header />

			<div className={styles.main}>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>
				<div className={styles.orderbook}>
					<Orderbook />
				</div>
			</div>
			<div className={styles.live_market}>
				<LiveMarket />
			</div>
		</div>
	);
}

export default Main;
