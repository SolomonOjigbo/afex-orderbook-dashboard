import React from "react";
import styles from "./LiveMarket.module.scss";
import { Button } from "@mui/material";
import { logData } from "../../dummyData";

interface LiveTicker {
	security_code: string;
	price: number;
}

const LiveMarket = () => {
	return (
		<div className={styles.wrapper}>
			<Button className={styles.button}>Live Market</Button>
			<>
				{logData.map((data: LiveTicker) => {
					return (
						<div key={data.security_code} className={styles.main}>
							{data.security_code}
							<span>₦ {data.price}</span>
						</div>
					);
				})}
			</>
		</div>
	);
};

export default LiveMarket;
