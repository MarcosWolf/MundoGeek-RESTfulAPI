function Header() {
    return (
        <div>
            <header id="mainHeader" className="header">
                <div className="header-container">
                    <i id="btnMobile" className="fas fa-bars"></i>

                    <a href="/" className="logo">Mundo . Geek<i className="fa-solid fa-glasses"></i></a>

                    <i id="btnSearch" className="fa-solid fa-magnifying-glass"></i>

                    <form className="header-form">
                        <input type="text" placeholder="O que deseja buscar?" />
                        <button type="submit"> <i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>

                    <div className="header-social">
                        <ul>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li><i className="fa-brands fa-facebook"></i></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header