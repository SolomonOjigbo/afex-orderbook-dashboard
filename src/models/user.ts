export type User = {
	email: string;
	password: string;
	first_name?: string;
	last_name?: string;
	phone?: string;
	token: string;
};

export type FormValues = {
	first_name?: string;
	last_name?: string;
	email: string;
	phone?: string;
	occupation?: string;
	password: string;
	auth_type: string;
};

export type loginModel = {
	email: string;
	password: string;
	auth_type: string;
};
