import React from "react";
import styles from "./Sidebar.module.scss";
import { BsColumnsGap, BsGraphUp } from "react-icons/bs";
import { FiBriefcase, FiUsers, FiSettings } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";

const Sidebar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.menu_item}>
				<BsColumnsGap size="25px" />
				<span>Overview</span>
			</div>
			<div className={styles.menu_item}>
				<BsGraphUp size="25px" color="red" />
				<span>Market</span>
			</div>
			<div className={styles.menu_item}>
				<FiBriefcase size="25px" />
				<span>Portfolio</span>
			</div>
			<div className={styles.menu_item}>
				<FiUsers size="25px" />
				<span>Community</span>
			</div>
			<div className={styles.menu_item}>
				<GrDocument size="25px" />
				<span>Report</span>
			</div>
			<div className={styles.menu_item}>
				<FiSettings size="25px" />
				<span>Settings</span>
			</div>
		</div>
	);
};

export default Sidebar;
