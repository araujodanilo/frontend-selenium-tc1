const HeaderLayout = () => {
	return (
		<header className="p-3 mb-2 bg-dark text-white">
			<nav className="navbar bg-dark align-items-center"  >
				<a className="navbar-brand text-white" href="/">
					<img src="/imgs/searcher.png" alt="" /> CSI SYSTEM
				</a>
				<a className="nav-link text-white" href="/crimes">Registros atuais</a>
				<a className="nav-link text-white" href="/crimes/register">Cadastrar</a>
			</nav>
		</header>
	)
}

export default HeaderLayout