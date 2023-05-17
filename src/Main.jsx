import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout"
import FooterLayout from "./layouts/FooterLayout"
import Router from './Router';



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HeaderLayout />
			<RouterProvider router={Router} />
		<FooterLayout />
	</React.StrictMode>,
)
