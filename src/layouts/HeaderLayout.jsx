const HeaderLayout = () => {
	return (
		<header className="p-3 mb-2 bg-dark text-white">
			<nav className="navbar bg-dark navbar-expand-lg ms-auto font-link"  >
				<a className="navbar-brand text-white" href="/">
					<img src="/imgs/searcher.png" alt="" /> CSI SYSTEM
				</a>
				<a className="nav-link text-white ms-5 me-5" href="/crimes">Registros atuais</a>
				<a className="nav-link text-white" href="/crimes/register">Cadastrar</a>
			</nav>
		</header>
	)
}

export default HeaderLayout

