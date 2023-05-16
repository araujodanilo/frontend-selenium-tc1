import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './ErrorPage';
import Root from "./routes/Root";
import CriminalCasesPage from "./pages/CriminalCasesPage";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: "/criminalCases",
		element: <CriminalCasesPage />,
		errorElement: <ErrorPage />
	}
]);

export default Router;