import {useState} from "react";
import Axios from 'axios';

import PostList from "./PostList";

const initialPosts = [

];

const DataLastNews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMorePosts, setHasMorePosts] = useState(true);

    const loadMorePosts = () => {

    };

    return (
        <>
            <h1>Últimas Notícias</h1>
            <PostList initialPosts={initialPosts} loadMorePosts={loadMorePosts} hasMorePosts={hasMorePosts} />
        </>

    );

};

export default DataLastNews;