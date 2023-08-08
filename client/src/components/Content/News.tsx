import DataLastNews from "../Data/DataLastNews";
import DataTopViews from "../Data/DataTopViews";
import DataLastReviews from "../Data/DataLastReviews";

function News() {
    return (
        <div>
            <div className="posts">
                <div className="posts-container">

                    <div className="post-left">
                        <h1><span>Últimas notícias</span></h1>

                        <DataLastNews />

                        <div className="post-btn-container">
                            <a href="#" className="post-btn">Veja mais notícias</a>
                        </div>
                    </div>
                    
                    <div className="post-right">
                        <h1><span>As mais visualizadas</span></h1>

                        <DataTopViews />

                        <h1 className="post-title-separator"><span>Últimos reviews</span></h1>

                        <DataLastReviews />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News