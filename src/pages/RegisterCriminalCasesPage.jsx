import { useParams } from "react-router-dom";
import CriminalCasesForm from "../components/forms/CriminalCases/Index";


const RegisterCriminalCases = () => {
	const { id } = useParams()
	return (
		<CriminalCasesForm id={id} />
	);
}

export default RegisterCriminalCases;