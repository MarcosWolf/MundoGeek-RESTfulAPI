import { Link } from "react-router-dom";
import { IPosts } from "../Models/IPosts";

import { format } from "date-fns";

const basePath = "/img/posts/";

interface PostListProps {
    posts: IPosts[];
}

const PostList: React.FC<PostListProps> = ({ posts}) => {
    return (
        <>
            {posts.map(post => (
                <div className="feed-card" key={post.postID}>
                    <div className="feed-img">
                        <Link to={"post/" + post.postID}>
                            <img src={basePath + post.postTHUMBNAIL} />
                        </Link>
                    </div>
                    <div className="feed-data">
                        <Link to={"post/" + post.postID}>
                            <h3>{post.categoryNAME}</h3>
                            <h2>{post.postTITLE}</h2>
                            <p>{format(new Date(post.postDATE), 'dd/MM/yyyy')}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostList;
