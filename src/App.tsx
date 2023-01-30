import React from "react";
import Header from "./components/Header";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar";
import Orderbook from "./pages/Orderbook";

function App() {
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
		</div>
	);
}

export default App;
