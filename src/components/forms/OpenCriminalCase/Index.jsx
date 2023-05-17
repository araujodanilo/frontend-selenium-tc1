const OpenCriminalCase = () => {
	return (
		<>
			<form >
				<label htmlFor="suspeito">Principal suspeito: </label>
				<input type="text" />
				<br /><br />
				<label htmlFor="tipoCrime">Tipo de crime: </label>
				<input type="text" />
				<br /><br />
				<label htmlFor="localCrime">Local do crime: </label>
				<input type="text" />
				<br /><br />
				<label htmlFor="data">Data: </label>
				<input type="text" />
				<br /><br />
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}

export default OpenCriminalCase;