// import Logo from "../components/logo.mjs"

const Navbar = () => {
    return (`
        <nav>
            <div class="container px-1">
                <a href="/testblog" class="logo">
                    ${Logo()}
                </a>
                <ul>
                    <li>
                        <a href="/testblog">
                            <i class="fa fa-home"></i> home
                        </a>
                    </li>
                    <li>
                        <a href="?page=about">
                            <i class="fa fa-user"></i> about
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    
    `)
}
