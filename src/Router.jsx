import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './ErrorPage';
import Root from "./routes/Root";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />
	},
]);

export default Router;