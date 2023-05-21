import { useEffect, useState } from "react";
import { deleteOpenCriminalCase as deleteCrime, findAllOpenCriminalCase as findAll } from "../../../api/OpenCriminalCaseApi"

const OpenCriminalCasesTable = () => {
	const [criminalCases, setCriminalCases] = useState([]);

	const loadingData = async () => {
		findAll(setCriminalCases)
	}

	const handleDelete = (id) => {
		deleteCrime(id)
		window.location.reload()
	}

	const handleEdit = (id) => {
		window.location.assign(`/crimes/edit/${id}`)
	}

	useEffect(() => {
		loadingData()
	}, []);

	return (
		<div className="m-3"> 
			<div className="table-responsive m-2 d-flex text-center justify-content-center align-items-center">
				<table className="table table-light table-striped table-hover table-bordered table-sm align-middle">
					<thead className="table-dark align-middle">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Principal suspeito</th>
							<th scope="col">Tipo do crime</th>
							<th scope="col">Local do crime</th>
							<th scope="col">Data do crime</th>
							<th scope="col">Operação</th>
						</tr>
					</thead>
					<tbody>
						{criminalCases.map((criminalCase) => {
							return (
								<tr key={criminalCase.id}>
									<td scope="row">{criminalCase.id}</td>
									<td>{criminalCase.crimeSuspect}</td>
									<td>{criminalCase.crimeType}</td>
									<td>{criminalCase.crimeLocation}</td>
									<td>{criminalCase.crimeDate}</td>
									<td>
										<div className="d-flex gap-2 justify-content-center">
											<button className="btn btn-editar" onClick={() => { handleEdit(criminalCase.id) }}>Editar</button>
											<button className="btn btn-excluir" onClick={() => { handleDelete(criminalCase.id) }}>Excluir</button>
										</div>
									</td>

								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default OpenCriminalCasesTable;