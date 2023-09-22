import { Link } from 'react-router-dom';

function HeaderBottom() {
    return(
        <div>
            <div id="header" className="header-bottom">
                <div className="header-bottom-container">
                    <nav className="nav-bar">
                        <ul>
                            <Link to={"/tag/0"}><li>Filmes e TV</li></Link>
                            <Link to={"/tag/1"}><li>Quadrinhos</li></Link>
                            <Link to={"/tag/2"}><li>Otaku</li></Link>
                            <Link to={"/tag/3"}><li>Jogos</li></Link>
                            <Link to={"/tag/4"}><li>Tecnologia</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom