import BidTable from "../components/BidTable";
import LogTable from "../components/LogTable";
import OfferTable from "../components/OfferTable";
import SideMenu from "../components/SideMenu";
import TopNav from "../components/TopNav";
import styles from "./Orderbook.module.scss";

const Orderbook = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.sidemenu}>
				<SideMenu />
			</div>
			<div className={styles.container}>
				<TopNav />
				<div className={styles.main}>
					<div className={styles.table}>
						<BidTable />
						<OfferTable />
					</div>
					<div className={styles.log}>
						<LogTable />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Orderbook;
