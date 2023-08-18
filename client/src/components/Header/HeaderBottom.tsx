import { Link } from 'react-router-dom';

function HeaderBottom() {
    return(
        <div>
            <div id="header" className="header-bottom">
                <div className="header-bottom-container">
                    <nav className="nav-bar">
                        <ul>
                            <li><Link to={"../tag/0"}>Filmes e TV</Link></li>
                            <li><Link to={"../tag/1"}>Quadrinhos</Link></li>
                            <li><Link to={"../tag/2"}>Otaku</Link></li>
                            <li><Link to={"../tag/3"}>Jogos</Link></li>
                            <li><Link to={"../tag/4"}>Tecnologia</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom