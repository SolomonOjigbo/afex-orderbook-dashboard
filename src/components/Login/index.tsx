import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "./Login.module.scss";
import { loginModel } from "../../models/user";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { login } from "../../features/authService";
import { MenuItem } from "@mui/material";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
	email: Yup.string().required("Email is required").email("Email is invalid"),
	auth_type: Yup.string().required("Auth Type is Required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = useForm<loginModel>({
		resolver: yupResolver(validationSchema),
		mode: "onChange",
		shouldFocusError: true,
		criteriaMode: "all",
	});

	const onSubmit: SubmitHandler<loginModel> = (data) => {
		dispatch(login(data));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
		console.log("isAthenticated :", isAuthenticated);
	}, [isAuthenticated, navigate]);

	return (
		<div className={styles.container}>
			<CssBaseline />
			<Box
				sx={{
					width: 500,
					marginTop: 15,
					padding: 5,
					border: 1,
				}}
			>
				<Grid textAlign="center">
					<Typography component="h1" variant="h4">
						Login
					</Typography>
				</Grid>
				<Grid textAlign="center">
					<p>
						Don't have an account?
						<span>
							<Link to="/register"> Register</Link>
						</span>
					</p>
				</Grid>

				<Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						autoComplete="email"
						autoFocus
						{...register("email")}
						error={errors.email ? true : false}
					/>
					<Typography variant="inherit" color="textSecondary">
						{errors.email?.message}
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Password"
						id="password"
						autoComplete="current-password"
						{...register("password")}
						error={errors.password ? true : false}
					/>
					<Typography variant="inherit" color="textSecondary">
						{errors.password?.message}
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						select
						value={"password"}
						label="Auth Type"
						id="auth_type"
						{...register("auth_type")}
						error={errors.auth_type ? true : false}
					>
						<MenuItem value="password">Password</MenuItem>
					</TextField>
					<Typography variant="inherit" color="textSecondary">
						{errors.auth_type?.message}
					</Typography>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						disabled={!isDirty || !isValid}
					>
						Login
					</Button>
				</Box>
			</Box>
		</div>
	);
}

export default Login;
