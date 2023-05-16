import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './ErrorPage';
import Root from "./routes/Root";
import RegisterOpenCriminalCase from "./routes/RegisterOpenCriminalCase";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: "/register",
		element: <RegisterOpenCriminalCase />,
		errorElement: <ErrorPage />
	}
]);

export default Router;