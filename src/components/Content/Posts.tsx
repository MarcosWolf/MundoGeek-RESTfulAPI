import DataPosts from "../Data/DataPosts";
import DataTopComments from "../Data/DataTopComments";
import DataLastReviews from "../Data/DataLastReviews";

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

                        <DataLastReviews />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts