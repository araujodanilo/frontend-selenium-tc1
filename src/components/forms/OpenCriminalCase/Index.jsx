import { useEffect, useState } from "react"
import * as yup from 'yup';
import { createOpenCriminalCase as create, updateOpenCriminalCase as update, getOneOpenCriminalCase as findOneCrime } from "../../../api/OpenCriminalCaseApi"

const createSchema = yup.object({
	crimeSuspect: yup.string().required('Campo obrigatório'),
	crimeType: yup.string().required('Campo obrigatório'),
	crimeLocation: yup.string().required('Campo obrigatório'),
	crimeDate: yup.string().required('Campo obrigatório'),
});

const OpenCriminalCaseForm = ({ id }) => {
	const [form, setForm] = useState({})
	const [formErrors, setFormErrors] = useState("")

	const createSchema = yup.object({
		crimeSuspect: yup.string().required('Campo obrigatório'),
		crimeType: yup.string().required('Campo obrigatório'),
		crimeLocation: yup.string().required('Campo obrigatório'),
		crimeDate: yup.string().required('Campo obrigatório'),
	});

	const handleChange = (e) => { setForm(values => ({ ...values, [e.target.name]: e.target.value })) }

	const handleCancel = () => { window.location.assign("/crimes") }

	const handleReset = () => {
		setForm({})
		setFormErrors({})
	}

	const handleValidation = async () => {
		setFormErrors({})
		try {
			await createSchema.validate(form, {
				abortEarly: false,
			});
		} catch (err) {
			err.inner.forEach(e => {
				setFormErrors(values => ({ ...values, [e.path]: e.message }))
			})
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(form)
		await handleValidation(form)
		if (Object.keys(formErrors) == 0) {
			if (id)
				update(id, form)
			else
				create(form)
			window.location.assign("/crimes")
		}
	}

	useEffect(() => {
		if (id)
			findOneCrime(id, setForm)
	}, [])

	return (
		<>
			<form className="d-flex flex-column form-group gap-3" onSubmit={handleSubmit} onReset={handleReset}>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="crimeSuspect">Principal suspeito: </label>
						<input className="form-control" onChange={handleChange} type="text" name="crimeSuspect" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeSuspect}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="crimeType">Tipo de crime: </label>
						<input className="form-control" onChange={handleChange} type="text" name="crimeType" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeType}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="crimeLocation">Local do crime: </label>
						<input className="form-control" onChange={handleChange} type="text" name="crimeLocation" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeLocation}</p>
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="d-flex flex-row">
						<label className="form-label" htmlFor="crimeDate">Data: </label>
						<input className="form-control" onChange={handleChange} type="datetime-local" name="crimeDate" />
					</div>
					<div className="text-center text-danger">
						<p>{formErrors.crimeDate}</p>
					</div>
				</div>

				{
					(id) ?
						<div className="d-flex flex-row justify-content-between">
							<input className="btn btn-danger" onClick={handleCancel} type="button" value="Cancelar" />
							<input className="btn btn-warning" type="submit" value="Atualizar" />
						</div>
						:
						<div className="d-flex flex-row justify-content-between">
							<input className="btn btn-danger" onClick={handleCancel} type="button" value="Cancelar" />
							<div className="gap-2 d-flex">
								<input className="btn btn-info" type="reset" value="Limpar" />
								<input className="btn btn-success" type="submit" value="Enviar" />
							</div>
						</div>
				}
			</form>
		</>
	)
}

export default OpenCriminalCaseForm;