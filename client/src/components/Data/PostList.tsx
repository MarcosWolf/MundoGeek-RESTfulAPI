import {useState} from "react";
import PostItem from "./PostItem";

import { IPosts } from "../Models/IPosts";

interface PostListProps {
    initialPosts: IPosts[];
    loadMorePosts: () => void;
    hasMorePosts: boolean;
}

const PostList: React.FC<PostListProps> = ({initialPosts, loadMorePosts, hasMorePosts}) => {
    const [posts, setPosts] = useState(initialPosts);

    const handleLoadMore = () => {
        loadMorePosts();
        // Atualizar o estado com as novas postagens carregadas
        // Exemplo: setPosts(newPosts);
    };

    return (
        <div className="feed-card">
            {posts.map((post) => (
                <PostItem key={post.postID} post={post} />
            ))}
            {hasMorePosts && (
                <button onClick={handleLoadMore} className="feed-btn-container">Carregar mais</button>
            )}
        </div>
    );
}

export default PostList;