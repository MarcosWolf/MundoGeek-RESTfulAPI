import { Link } from 'react-router-dom';

function HeaderBottom() {
    return(
        <div>
            <div id="header" className="header-bottom">
                <div className="header-bottom-container">
                    <nav className="nav-bar">
                        <ul>
                            <li><Link to={"../category/0"}>Filmes e TV</Link></li>
                            <li><Link to={"../category/1"}>Quadrinhos</Link></li>
                            <li><Link to={"../category/2"}>Otaku</Link></li>
                            <li><Link to={"../category/3"}>Jogos</Link></li>
                            <li><Link to={"../category/4"}>Tecnologia</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom