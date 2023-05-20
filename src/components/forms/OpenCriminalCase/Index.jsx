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
	const [form, setForm] = useState({})
	const [formErrors, setFormErrors] = useState("")

	const handleChange = (e) => { setForm(values => ({ ...values, [e.target.name]: e.target.value })) }

	const registerCrime = async (data) => {
		await createOpenCriminalCase(data)
	}

	const handleReset = () => {
		setForm({})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFormErrors([])
		try {
			const validation = await createSchema.validate(form
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
						<input className="form-control" onChange={handleChange} type="text" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeSuspect}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="tipoCrime">Tipo de crime: </label>
						<input className="form-control" onChange={handleChange} type="text" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeType}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="localCrime">Local do crime: </label>
						<input className="form-control" onChange={handleChange} type="text" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeLocation}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="data">Data: </label>
						<input className="form-control" onChange={handleChange} type="datetime-local" />
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