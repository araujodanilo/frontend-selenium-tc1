import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './error-page';
import Root from "./routes/root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />
	},
]);

export default router