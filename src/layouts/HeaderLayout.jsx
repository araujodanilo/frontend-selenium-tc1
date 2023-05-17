const HeaderLayout = () => {
	return (
		<header class="p-3 mb-2 bg-dark text-white">
			<nav class="navbar bg-dark py-4 ms-5 "  >
				<a class="navbar-brand text-white" href="/">
					<img src="searcher.png" alt=""/> CSI SYSTEM
				</a>
				<a class="nav-link text-white" href="/">Registros atuais</a>
        		<a class="nav-link text-white" href="/register">Cadastrar</a>
			</nav>
		</header>
	)
}

export default HeaderLayout