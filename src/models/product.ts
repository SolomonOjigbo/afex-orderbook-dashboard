type OrderType = {
	order_type?: string;
	fee_name?: string;
	fee_description?: string | null;
	fee_value?: number;
	fee_type?: string;
	fee_structure_type?: string;
};

export type logModel = {
	security_code: string;
	board: string;
	price: number;
	created: string | Date;
	transaction_fee_configurations: OrderType[];
};
