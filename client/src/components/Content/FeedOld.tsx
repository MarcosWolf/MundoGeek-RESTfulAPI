import DataLastNews from "../Data/DataLastNews";
import DataLastReviews from "../Data/DataLastReviews";

function FeedOld() {
    return (
        <div>
            <div className="feed">
                <div className="feed-container">

                    <div className="feed-left">
                        <h1><span>Últimas notícias</span></h1>

                        <DataLastNews />

                    </div>
                    
                    <div className="feed-right">
                        <h1><span>As mais visualizadas</span></h1>

                        

                        <h1 className="feed-title-separator"><span>Últimos reviews</span></h1>

                        <DataLastReviews />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedOld;