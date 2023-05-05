import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './error-page'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        errorElement: <ErrorPage />
    },
]);

export default router