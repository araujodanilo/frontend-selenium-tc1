import { useEffect, useState } from "react";
import { getAllOpenCriminalCase } from "../../../api/OpenCriminalCaseApi"

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
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	);
}

export default OpenCriminalCasesTable;