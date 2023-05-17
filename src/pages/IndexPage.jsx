import '../index.css'

const IndexPage = () => {
	return (
		<>
			<div class="p-3 mb-2 bg-secondary text-white">
				<h1 class="ms-3">Bem vindo</h1>

				<p class="ms-3">Este é um site que possui como finalidade mostrar registros criminais em aberto</p>
				<div class="container">
					<img  src="board.jpg" alt="Avatar" class="img-button image img-thumbnail border-dark" />
					<div class="middle">
						<div class="text">Visualizar registros</div>
					</div>
				</div>
				<div class="container">
					<img  src="typing.jpg" alt="Avatar" class="img-button image img-thumbnail border-dark" />
					<div class="middle">
						<div class="text">Cadastrar</div>
					</div>
				</div>
				
			</div>
		</>
	)
}

export default IndexPage;



