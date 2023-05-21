import { useEffect, useState } from "react"
import * as yup from 'yup';
import { createOpenCriminalCase as create, updateOpenCriminalCase as update, findOneOpenCriminalCase as findOneCrime } from "../../../api/OpenCriminalCaseApi"

const OpenCriminalCaseForm = ({ id }) => {
	const [form, setForm] = useState({
		crimeSuspect: '',
		crimeType: '',
		crimeLocation: '',
		crimeDate: '',
	})
	const [formErrors, setFormErrors] = useState({})

	const createSchema = yup.object({
		crimeSuspect: yup.string().required('Campo obrigatório'),
		crimeType: yup.string().required('Campo obrigatório'),
		crimeLocation: yup.string().required('Campo obrigatório'),
		crimeDate: yup.string().required('Campo obrigatório'),
	});

	const handleChange = (e) => { setForm(values => ({ ...values, [e.target.name]: e.target.value })) }

	const handleCancel = () => { window.location.assign("/crimes") }

	const handleReset = () => {
		setForm({
			crimeSuspect: '',
			crimeType: '',
			crimeLocation: '',
			crimeDate: '',
		})
		setFormErrors({})
	}

	const handleChangeCrimeDate = (e) => {
		if(Date.parse(e.target.value) < Date.now()){
			setForm(values => ({...values, [e.target.name]:e.target.value}))
		}
		else{
			setFormErrors(values => ({...values, [e.target.name]:"Data selecionada é maior que a data atual!"}))
		}
	}

	const handleValidation = async (data) => {
		setFormErrors({})
		try {
			await createSchema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			err.inner.forEach(e => {
				setFormErrors(values => ({ ...values, [e.path]: e.message }))
			})
			return false
		}
		return true
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (await handleValidation(form)) {
			if (id)
				update(id, form)
			else
				create(form)
			window.location.assign("/crimes")
		}
	}

	useEffect(() => {
		if (id) {
			findOneCrime(id, setForm)
		}
	}, [id])

	return (
		<>
			<div className="p-3">
				<div className="border border-dark"> 
					<form className="d-flex flex-column form-group gap-3 m-3" onSubmit={handleSubmit} onReset={handleReset}>

						<div className="d-flex flex-column">
							<div className="d-flex flex-row">
								<label className="form-label" htmlFor="crimeSuspect">Principal suspeito: </label>
								<input value={form.crimeSuspect} className="form-control" onChange={handleChange} type="text" name="crimeSuspect" />
							</div>
							<div className="text-center text-danger">
								<p>{formErrors.crimeSuspect}</p>
							</div>
						</div>

						<div className="d-flex flex-column">
							<div className="d-flex flex-row">
								<label className="form-label" htmlFor="crimeType">Tipo de crime: </label>
								<input value={form.crimeType} className="form-control" onChange={handleChange} type="text" name="crimeType" />
							</div>
							<div className="text-center text-danger">
								<p>{formErrors.crimeType}</p>
							</div>
						</div>

						<div className="d-flex flex-column">
							<div className="d-flex flex-row">
								<label className="form-label" htmlFor="crimeLocation">Local do crime: </label>
								<input value={form.crimeLocation} className="form-control" onChange={handleChange} type="text" name="crimeLocation" />
							</div>
							<div className="text-center text-danger">
								<p>{formErrors.crimeLocation}</p>
							</div>
						</div>

						<div className="d-flex flex-column">
							<div className="d-flex flex-row">
								<label className="form-label" htmlFor="crimeDate">Data: </label>
								<input value={form.crimeDate} className="form-control" onChange={handleChangeCrimeDate} type="datetime-local" name="crimeDate" />
							</div>
							<div className="text-center text-danger">
								<p>{formErrors.crimeDate}</p>
							</div>
						</div>

						{
							(id) ?
								<div className="d-flex flex-row justify-content-between">
									<input className="btn" onClick={handleCancel} type="button" value="Cancelar" />
									<input className="btn" type="submit" value="Atualizar" />
								</div>
								:
								<div className="d-flex flex-row justify-content-between">
									<input className="btn" onClick={handleCancel} type="button" value="Cancelar" />
									<div className="gap-2 d-flex">
										<input className="btn" type="reset" value="Limpar" />
										<input className="btn" type="submit" value="Enviar" />
									</div>
								</div>
						}
					</form>
				</div>
			</div>
		</>
	)
}

export default OpenCriminalCaseForm;