import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";
import { IPosts } from "../Models/IPosts";

const Search: React.FC = () => {
    const { query } = useParams<{ query: string }>();
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState(false);
    const [error404, setError404] = useState<boolean>(false);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

    const loadPosts = async (page: number) => {
        setShowLoading(true);
        setError404(false);

        try {
            const response = await Axios.get(`https://api-mundogeek.onrender.com/search/${page}&10/${query}`);

            const newPosts: IPosts[] = response.data;
            setShowLoading(false);

            if (newPosts.length === 0) {
                setMessage("Desculpe, não encontrei posts relacionados.");
                setShowLoadMoreButton(false);
            } else {
                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
                setMessage("Carregar mais");
                setShowLoadMoreButton(true);
            }
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setError404(true);
                setMessage("Desculpe, não encontrei posts relacionados.");
                setShowLoading(false);
            }
        }
    };

    useEffect(() => {
        setPosts([]);
        setPage(0);
        setShowLoadMoreButton(true);
        loadPosts(0);
    }, [query]);

    const loadMorePosts = () => {
        const nextPage = page + 10;
        loadPosts(nextPage);
        setPage(nextPage);
        setShowLoading(true);
    };

    return (
        <>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-left">
                        <h1><span>Buscando por "{query}"</span></h1>
                        <PostList posts={posts || []} />
                        {error404 ? (
                            <>
                                <h3>{message}</h3>
                            </>
                        ) : (
                            showLoadMoreButton && (
                                <div className="feed-btn-container">
                                    <LoadMoreButton
                                        message={message}
                                        onClick={loadMorePosts}
                                        showLoading={showLoading}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
