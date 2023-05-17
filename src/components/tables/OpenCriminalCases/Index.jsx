import { useEffect, useState } from "react";

const OpenCriminalCasesTable = () => {
    const [criminalCases, setCriminalCases] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/open_criminal_case")
			.then(response => response.json())
			.then(data => {
				setCriminalCases(data);
			})
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
					<tr key = {criminalCase.id}>
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