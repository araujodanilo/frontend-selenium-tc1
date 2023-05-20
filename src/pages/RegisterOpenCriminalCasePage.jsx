import { useParams } from "react-router-dom";
import OpenCriminalCasesForm from "../components/forms/OpenCriminalCase/Index";


const RegisterOpenCriminalCase = () => {
	const { id } = useParams()
	return (
		<OpenCriminalCasesForm id={id} />
	);
}

export default RegisterOpenCriminalCase;