import '../index.css'

const IndexPage = () => {
	return (
		<>
			<div className="p-3 mb-2 bg-secondary text-white font-link">
				<h1 className="ms-3 text-center">Bem-vindo (a),</h1>

				<p className="m-4 fs-5 text-center">CSI SYSTEM é um sistema FICTÍCIO para gerenciamento de registros criminais que tem como finalidade auxiliar policiais e outros profissionais da área de segurança a pesquisarem por informações relevantes sobre determinados crimes inventados. Esse site foi desenvolvido como exercício para a disciplina de Tópicos em Computação I do Instituto Federal de São Paulo para a prática de testes de software.</p>
				<div className="d-flex">
				<div className="container-faded d-flex align-items-center justify-content-center">
					<img src="/imgs/board.jpg" alt="Foto de braço de pessoa apontando para quadro com informações de um crime." className="image img-thumbnail border-dark" />
					<div className="middle">
						<div className="text"><a href='/crimes'>Visualizar registros</a></div>
					</div>
				</div>
				<div className="container-faded d-flex align-items-center justify-content-center">
					<img src="/imgs/typing.jpg" alt="Foto de braço de pessoa digitando em notebook." className="image img-thumbnail border-dark" />
					<div className="middle">
						<div className="text"><a href='/crimes/register'>Cadastrar</a></div>
					</div>
				</div>

				</div>
				

			</div>
		</>
	)
}

export default IndexPage;
