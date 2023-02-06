import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormValues } from "../../models/user";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { registerUser } from "../../features/authService";
import { MenuItem } from "@mui/material";
import { useEffect } from "react";
import styles from "./Register.module.scss";

const validationSchema = Yup.object().shape({
	first_name: Yup.string().required("First Name is required"),
	last_name: Yup.string().required("Last Name is required"),
	email: Yup.string().required("Email is required").email("Email is invalid"),
	auth_type: Yup.string().required("Auth Type is Required"),
	phone: Yup.string().required("Phone Number is required"),
	occupation: Yup.string().required("Occupation is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

function Register() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
		mode: "onChange",
		shouldFocusError: true,
		criteriaMode: "all",
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(registerUser(data));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated, navigate]);

	return (
		<Container className={styles.container}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 15,
					padding: 5,
					alignItems: "center",
					justifyContent: "center",
					border: 1,
				}}
			>
				<Grid textAlign="center">
					<Typography component="h1" variant="h4">
						Create an Account
					</Typography>
				</Grid>
				<Grid textAlign="center">
					<p>
						Already have an account?
						<span>
							<Link to="/login"> Login</Link>
						</span>
					</p>
				</Grid>

				<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="given-name"
								required
								fullWidth
								id="first_name"
								label="First Name"
								autoFocus
								{...register("first_name")}
								error={errors.first_name ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.first_name?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="last_name"
								label="Last Name"
								autoComplete="last_name"
								autoFocus
								{...register("last_name")}
								error={errors.last_name ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.last_name?.message}
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								autoComplete="email"
								autoFocus
								{...register("email")}
								error={errors.email ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.email?.message}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="phone"
								label="Phone Number"
								autoComplete="phone"
								autoFocus
								{...register("phone")}
								error={errors.phone ? true : false}
							/>
							<Typography variant="inherit" color="textSecondary">
								{errors.phone?.message}
							</Typography>
						</Grid>
					</Grid>
					<TextField
						margin="normal"
						required
						fullWidth
						id="occupation"
						label="Occupation"
						autoComplete="occupation"
						autoFocus
						{...register("occupation")}
						error={errors.occupation ? true : false}
					/>
					<Typography variant="inherit" color="textSecondary">
						{errors.occupation?.message}
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
						Register
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

export default Register;
