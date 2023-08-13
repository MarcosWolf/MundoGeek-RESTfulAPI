import {useState, useEffect} from "react";
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";

import { IPosts } from "../Models/IPosts";

const DataLastNews: React.FC = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);

    const loadMorePosts = async () => {
        try {
            //const response = await Axios.get(`http://192.168.0.2:3000/lastnews/${page}&10`);
            const response = await Axios.get(`https://api-mundogeek.onrender.com/lastnews/${page}&10`);
            const newPosts: IPosts[] = response.data;
            setPosts(prevPosts => [...prevPosts, ...newPosts]);
            setPage(prevPage => prevPage + 10);
            console.log(page);
        } catch (error) {
            console.error('Error loading more posts: ', error);
        }
    };

    useEffect(() => {
        console.log("Triggered");
        loadMorePosts();
    }, []);

    return (
        <>
            <PostList posts={posts} />
            <div className="feed-btn-container">
                <LoadMoreButton onClick={loadMorePosts} />
            </div>
        </>
    )

}

export default DataLastNews;
