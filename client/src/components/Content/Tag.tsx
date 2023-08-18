import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";

import { IPosts } from "../Models/IPosts";

const Tag: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState(false);

    const loadMorePosts = async () => {
        setShowLoading(true);
        try {
            const response = await Axios.get(`http://192.168.0.8:3000/tag/${id}/${page}&10`);
            const newPosts: IPosts[] = response.data;
            setMessage("Carregar mais");
            setShowLoading(false);

            if (newPosts.length === 0) {
                setHasMore(false);
            } else {
                setPosts(prevPosts => [...prevPosts, ...newPosts]);
                setPage(prevPage => prevPage + 10);
            }
        } catch (error) {
            console.error('Error loading more posts: ', error);
        }
    };

    useEffect(() => {
        loadMorePosts();
    }, []);

    return (
        <>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-left">
                        <h1><span>Últimas notícias</span></h1>
                        <PostList posts={posts} />
                        { hasMore &&
                            <div className="feed-btn-container">
                                <LoadMoreButton message={message} onClick={loadMorePosts} showLoading={showLoading} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tag;