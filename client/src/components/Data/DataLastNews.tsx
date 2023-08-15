import {useState, useEffect} from "react";
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";

import { IPosts } from "../Models/IPosts";

const DataLastNews: React.FC = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState(false);

    const loadMorePosts = async () => {
        setShowLoading(true);
        try {
            //const response = await Axios.get(`http://192.168.0.2:3000/lastnews/${page}&10`);
            const response = await Axios.get(`https://api-mundogeek.onrender.com/lastnews/${page}&10`);
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
            <PostList posts={posts} />
            { hasMore &&
                <div className="feed-btn-container">
                    <LoadMoreButton message={message} onClick={loadMorePosts} showLoading={showLoading} />
                </div>
            }
        </>
    )

}

export default DataLastNews;
