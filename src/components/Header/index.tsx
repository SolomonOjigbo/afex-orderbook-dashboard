import React from "react";
import styles from "./Header.module.scss";
import { DarkMode } from "@mui/icons-material";
import Logo from "../../assests/Logo.png";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header_left}>
				<img src={Logo} alt="" className={styles.logo} />
				<DarkMode />
			</div>
			<div className={styles.header_right}>
				<KeyboardArrowRightOutlinedIcon className={styles.arrow_icon} />
				<span>
					<ul className={styles.account_info}>
						<li>Cash Balance</li>
						<li>₦8,374,763</li>
					</ul>
				</span>
				<span>
					<ul className={styles.account_info}>
						<li>Securities Value</li>
						<li>₦8,374,763</li>
					</ul>
				</span>
				<span className={styles.account_info}>
					<ul className={styles.account_info}>
						<li>Loan Balance</li>
						<li>₦7,542,246</li>
					</ul>
				</span>
			</div>
			<div className={styles.demo}>
				<Button className={styles.button}>Demo</Button>
				<KeyboardArrowDownIcon className={styles.icon} />
			</div>
		</div>
	);
};

export default Header;
