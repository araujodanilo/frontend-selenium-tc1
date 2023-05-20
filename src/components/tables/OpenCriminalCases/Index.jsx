import { useEffect, useState } from "react";
import { deleteOpenCriminalCase as deleteCrime, getAllOpenCriminalCase } from "../../../api/OpenCriminalCaseApi"

const OpenCriminalCasesTable = () => {
	const [criminalCases, setCriminalCases] = useState([]);

	const loadingData = async () => {
		getAllOpenCriminalCase(setCriminalCases)
	}

	const handleDelete = (id) => {
		deleteCrime(id)
		window.location.reload()
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
								<td>{criminalCase.crimeSuspect}</td>
								<td>{criminalCase.crimeType}</td>
								<td>{criminalCase.crimeLocation}</td>
								<td>{criminalCase.crimeDate}</td>
								<td>
									<button onClick={() => { handleDelete(criminalCase.id) }}>Excluir</button>
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