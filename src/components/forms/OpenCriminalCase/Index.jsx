import { useState } from "react"
import * as yup from 'yup';
import { createOpenCriminalCase } from "../../../api/OpenCriminalCaseApi";

const createSchema = yup.object({
	crimeSuspect: yup.string().required('Campo obrigatório'),
	crimeType: yup.string().required('Campo obrigatório'),
	crimeLocation: yup.string().required('Campo obrigatório'),
	crimeDate: yup.string().required('Campo obrigatório'),
});

const OpenCriminalCaseForm = ({ id }) => {
	const [crimeSuspect, setCrimeSuspect] = useState("")
	const [crimeType, setCrimeType] = useState("")
	const [crimeLocation, setCrimeLocation] = useState("")
	const [crimeDate, setCrimeDate] = useState(null)

	const [formErrors, setFormErrors] = useState("")

	const setData = () => {
		return {
			crime_suspect: crimeSuspect,
			crime_type: crimeType,
			crime_location: crimeLocation,
			crime_date: crimeDate,
		}
	}

	const registerCrime = async (data) => {
		await createOpenCriminalCase(data)
	}

	const handleReset = () => {
		setFormErrors([])
		setCrimeSuspect("")
		setCrimeType("")
		setCrimeLocation("")
		setCrimeDate(null)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFormErrors([])
		const data = setData()
		try {
			const validation = await createSchema.validate({
				crimeSuspect,
				crimeType,
				crimeLocation,
				crimeDate
			}
				, { abortEarly: false })
		}
		catch (err) {
			const tempFormErrors = {}
			err.inner.forEach(

				i => {
					if (i.path) {
						tempFormErrors[i.path] = i.message;
					}
				})
			setFormErrors(tempFormErrors)
			return
		}
		await registerCrime(data)
	}

	return (
		<>
			<form className="d-flex flex-column form-group gap-3" onSubmit={handleSubmit}>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="suspeito">Principal suspeito: </label>
						<input className="form-control" type="text" value={crimeSuspect} onChange={(e) => setCrimeSuspect(e.target.value)} />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeSuspect}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="tipoCrime">Tipo de crime: </label>
						<input className="form-control" type="text" value={crimeType} onChange={(e) => setCrimeType(e.target.value)} />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeType}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="localCrime">Local do crime: </label>
						<input className="form-control" type="text" value={crimeLocation} onChange={(e) => setCrimeLocation(e.target.value)} />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeLocation}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="data">Data: </label>
						<input className="form-control" type="datetime-local" value={crimeDate} onChange={(e) => setCrimeDate(e.target.value)} />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeDate}</p>
					</div>
				</div>

				{
					(id) ?
						<div className="d-flex flex-row justify-content-between">
							<input className="btn btn-danger" type="submit" value="Apagar" />
							<input className="btn btn-warning" type="submit" value="Atualizar" />
						</div>
						:
						<div className="d-flex flex-row justify-content-between">
							<input className="btn btn-info" onClick={handleReset} type="reset" value="Limpar" />
							<input className="btn btn-success" type="submit" value="Enviar" />
						</div>
				}
			</form>
		</>
	)
}

export default OpenCriminalCaseForm;