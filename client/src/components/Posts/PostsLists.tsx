import { Link } from "react-router-dom";
import { IPosts } from "../Models/IPosts";

const basePath = "/img/posts/";

interface PostListProps {
    posts: IPosts[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
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
                            <h2>{post.postTITLE}</h2>
                            <p>Data</p>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PostList;
