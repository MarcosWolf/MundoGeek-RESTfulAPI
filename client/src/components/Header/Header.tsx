import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim() !== '') {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div>
            <header id="mainHeader" className="header">
                <div className="header-container">
                    <i id="btnMobile" className="fas fa-bars"></i>

                    <Link to="/"><div className="logo">Mundo . Geek<i className="fa-solid fa-glasses"></i></div></Link>

                    <i id="btnSearch" className="fa-solid fa-magnifying-glass"></i>

                    <form className="header-form" action="/search" method="GET" onSubmit={handleSubmit}>
                        <input type="text" name="query" placeholder="O que deseja buscar?" value={query} onChange={handleInputChange} autoComplete='off' />
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