import React, { ReactElement } from 'react';

interface Props {
}

function Posts(): ReactElement {
    return (
        <div>
            <div className="posts">
                <div className="posts-container">

                    <div className="post-left">
                        <h1><span>Últimas notícias</span></h1>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/posts/post1.jpg" /></div>
                            <div className="post-data">
                                <h2>Sea of Stars: o RPG mais aguardado do ano?</h2>
                                <p>25/07/2023</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/posts/post2.jpg" /></div>
                            <div className="post-data">
                                <h2>Futurama chegou ao FORTNITE nesta quarta-feira</h2>
                                <p>26/07/2023</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/posts/post3.jpg" /></div>
                            <div className="post-data">
                                <h2>Confira o gameplay novo de ARMORED CORE VI</h2>
                                <p>25/07/2023</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/posts/post4.jpg" /></div>
                            <div className="post-data">
                                <h2>Sonic Superstars: Mais detalhes sobre os poderes das Esmeraldas</h2>
                                <p>25/07/2023</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/posts/post5.jpg" /></div>
                            <div className="post-data">
                                <h2>Confira nossa análise sobre a 2ª temporada de Jujutsu Kaisen</h2>
                                <p>25/07/2023</p>
                            </div>
                        </div>

                        <div className="post-btn-container">
                            <a href="#" className="post-btn">Veja mais notícias</a>
                        </div>
                    </div>
                    
                    <div className="post-right">
                        <h1><span>As mais comentadas</span></h1>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/maiscomentadas/card1.jpg" /></div>
                            <div className="post-data">
                                <h2>Futurama chegou ao FORTNITE nesta quarta-feira</h2>
                                <p>há 3 horas</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/maiscomentadas/card2.jpg" /></div>
                            <div className="post-data">
                                <h2>Seleção com as melhores dicas para ELDEN RING</h2>
                                <p>há 1 semana</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/maiscomentadas/card3.jpg" /></div>
                            <div className="post-data">
                                <h2>Call of Duty Modern Warfare 3 tem artes vazadas</h2>
                                <p>há 3 dias</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/maiscomentadas/card4.jpg" /></div>
                            <div className="post-data">
                                <h2>Imsoniac estaria trabalhando em um novo projeto não anunciado</h2>
                                <p>há 4 dias</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/maiscomentadas/card5.jpg" /></div>
                            <div className="post-data">
                                <h2>Cyberpunk 2077: Phantom Liberty ganha edição de colecionador</h2>
                                <p>há 3 dias</p>
                            </div>
                        </div>

                        <h1 className="post-title-separator"><span>Últimos reviews</span></h1>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/ultimosreviews/post1.jpg" /></div>
                            <div className="post-data">
                                <h2>Confira nossa análise sobre a 2 temporada de Jujutsu Kaisen</h2>
                                <p>há 1 dia</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/ultimosreviews/post2.jpg" /></div>
                            <div className="post-data">
                                <h2>Oppenheimer, análise e revelações bombásticas</h2>
                                <p>há 6 dias</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/ultimosreviews/post3.jpg" /></div>
                            <div className="post-data">
                                <h2>Demon Slayer: saiba tudo sobre o anime</h2>
                                <p>há 9 dias</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/ultimosreviews/post4.jpg" /></div>
                            <div className="post-data">
                                <h2>John Wick: analisando a franquia</h2>
                                <p>há 12 dias</p>
                            </div>
                        </div>

                        <div className="post-card">
                            <div className="post-img"><img src="./img/ultimosreviews/post5.jpg" /></div>
                            <div className="post-data">
                                <h2>Diablo IV: vale mesmo a pena jogar?</h2>
                                <p>há 14 dias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts