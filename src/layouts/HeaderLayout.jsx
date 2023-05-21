const HeaderLayout = () => {
	return (
		<header className="p-3 mb-2 bg-dark text-white font-link">
		<nav class="navbar navbar-expand-lg navbar-light bg-dark">
			<div class="container-fluid">
				<a className="navbar-brand text-white" href="/">
					<img src="/imgs/searcher.png" alt="" /> CSI SYSTEM
				</a>
				<div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item m-3">
					<a class="nav-link" href="/crimes">Registros atuais</a>
					</li>
					<li class="nav-item m-3">
					<a class="nav-link" href="/crimes/register">Cadastrar</a>
					</li>
				</ul>
				</div>
			</div>
			</nav>
			</header>




		

		
	)
}

export default HeaderLayout

