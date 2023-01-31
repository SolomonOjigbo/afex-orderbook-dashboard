import React from "react";
import styles from "./SideMenu.module.scss";
import { BiTrendingUp } from "react-icons/bi";
import { FiBook, FiSearch } from "react-icons/fi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineCheckCircleOutline, MdOutlineCancel } from "react-icons/md";

const SideMenu = () => {
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<FiSearch className={styles.icon} color="grey" />
				<input type="text" placeholder="Search" />
			</div>
			<div className={styles.menu_item}>
				<BiTrendingUp size="18px" />
				<span>Product View</span>
			</div>
			<div className={styles.menu_item}>
				<FiBook size="18px" />
				<span style={{ color: "red" }}>Order Book</span>
			</div>
			<div className={styles.menu_item}>
				<RxCounterClockwiseClock size="18px" />
				<span>Price History</span>
			</div>
			<div className={styles.menu_item}>
				<AiOutlineEye size="18px" />
				<span>Open Orders</span>
			</div>
			<div className={styles.menu_item}>
				<MdOutlineCheckCircleOutline size="18px" />
				<span>Closed Trades</span>
			</div>
			<div className={styles.menu_item}>
				<MdOutlineCancel size="18px" />
				<span>Cancelled Trades</span>
			</div>
		</div>
	);
};

export default SideMenu;
