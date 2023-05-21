import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './ErrorPage';
import IndexPage from './pages/IndexPage'
import ListAllCriminalCases from "./pages/ListAllCriminalCases";
import RegisterCriminalCases from "./pages/RegisterCriminalCasesPage";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
		errorElement: <ErrorPage />
	},
	{
		path: "/crimes",
		children: [{
			index: true,
			element: <ListAllCriminalCases />
		},
		{
			path: "register",
			element: <RegisterCriminalCases />
		},
		{
			path: "edit/:id",
			element: <RegisterCriminalCases /> // Usando mesma página para editar. 
		}
		]
	}
])

export default Router;