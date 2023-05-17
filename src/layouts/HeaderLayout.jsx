const HeaderLayout = () => {
	return (
		<header className="p-3 mb-2 bg-dark text-white">
			<nav className="navbar bg-dark py-4 ms-5 "  >
				<a className="navbar-brand text-white" href="/">
					<img src="/src/public/searcher.png" alt="" /> CSI SYSTEM
				</a>
				<a className="nav-link text-white" href="/">Registros atuais</a>
				<a className="nav-link text-white" href="/register">Cadastrar</a>
			</nav>
		</header>
	)
}

export default HeaderLayout