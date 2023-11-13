import { Posts } from "../Posts";
import { TopViews } from "../Side/TopViews";
import { LastReviews } from "../Side/LastReviews";

export const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-left">
                    <Posts />
                </div>
                <div className="feed-right">
                    <TopViews />
                    <LastReviews />
                </div>
            </div>
        </div>
    );
}