const HeaderLayout = () => {
	return (
		<header className="p-3 mb-2 bg-dark text-white font-link">
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand text-white" href="/">
						<img src="/imgs/searcher.png" alt="" /> CSI SYSTEM
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="">
							<i className="fa-solid fa-bars text-white"></i>
						</span>
					</button>
					<div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item m-3">
								<a className="nav-link" href="/crimes">Registros atuais</a>
							</li>
							<li className="nav-item m-3">
								<a className="nav-link" href="/crimes/register">Cadastrar</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default HeaderLayout

