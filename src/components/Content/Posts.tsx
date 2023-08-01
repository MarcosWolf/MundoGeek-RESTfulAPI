import DataPosts from "../Data/DataPosts";
import DataTopComments from "../Data/DataTopComments";

function Posts() {
    return (
        <div>
            <div className="posts">
                <div className="posts-container">

                    <div className="post-left">
                        <h1><span>Últimas notícias</span></h1>

                        <DataPosts />

                        <div className="post-btn-container">
                            <a href="#" className="post-btn">Veja mais notícias</a>
                        </div>
                    </div>
                    
                    <div className="post-right">
                        <h1><span>As mais comentadas</span></h1>

                        <DataTopComments />

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