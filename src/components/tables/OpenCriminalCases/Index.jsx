import { useEffect, useState } from "react";
import { deleteOpenCriminalCase, getAllOpenCriminalCase } from "../../../api/OpenCriminalCaseApi"

const OpenCriminalCasesTable = () => {
	const [criminalCases, setCriminalCases] = useState([]);

	const loadingData = async () => {
		getAllOpenCriminalCase(setCriminalCases)
	}

	useEffect(() => {
		loadingData()
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Principal suspeito</th>
						<th>Tipo do crime</th>
						<th>Local do crime</th>
						<th>Data do crime</th>
						<th>Operação</th>
					</tr>
				</thead>
				<tbody>
					{criminalCases.map((criminalCase) => {
						return (
							<tr key={criminalCase.id}>
								<td>{criminalCase.id}</td>
								<td>{criminalCase.main_suspect}</td>
								<td>{criminalCase.crime_type}</td>
								<td>{criminalCase.crime_location}</td>
								<td>{criminalCase.date}</td>
								<td>
									<button onClick={deleteOpenCriminalCase(criminalCase.id)}>Excluir</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	);
}

export default OpenCriminalCasesTable;