import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Main";
import Register from "./components/Register/Register";
import { useAppSelector } from "./hooks/useTypedSelector";
import Login from "./components/Login";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";

function App() {
	const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

	const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
		isAuthenticated: isAuthenticated,
		authenticationPath: "/login",
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/"
					element={
						<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Main />} />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
