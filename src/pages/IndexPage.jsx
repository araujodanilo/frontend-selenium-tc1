import '../index.css'

const IndexPage = () => {
	return (
		<>
			<div className="p-3 mb-2 bg-secondary text-white">
				<h1 className="ms-3">Bem vindo</h1>

				<p className="ms-3">Este é um site que possui como finalidade mostrar registros criminais em aberto</p>
				<div className="container">
					<img  src="/imgs/board.jpg" alt="Avatar" className="img-button image img-thumbnail border-dark" />
					<div className="middle">
						<div className="text">Visualizar registros</div>
					</div>
				</div>
				<div className="container">
					<img  src="/public/imgs/typing.jpg" alt="Avatar" className="img-button image img-thumbnail border-dark" />
					<div className="middle">
						<div className="text">Cadastrar</div>
					</div>
				</div>
				
			</div>
		</>
	)
}

export default IndexPage;



