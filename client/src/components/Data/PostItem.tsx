import { Link } from "react-router-dom";

import { IPosts } from "../Models/IPosts";

const basePath = "/img/posts/";

interface PostItemProps {
    post: IPosts[];
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <>
            <div className="feed-img">
                <Link to={"post/" + post.postID}><img src={basePath + post.postTHUMBNAIL} /></Link>
            </div>
            <div className="feed-data">
                <Link to={"post/" + post.postID}><h2>{post.postTITLE}</h2></Link>
                <p>Data</p>
            </div>
        </>
    );
}

export default PostItem;
