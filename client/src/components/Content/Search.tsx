import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";
import { IPosts } from "../Models/IPosts";

const Search: React.FC = () => {
    const { query } = useParams<{ query: string }>();
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState(false);
    const [error404, setError404] = useState<boolean>(false);

    const loadPosts = async (page: number) => {
        try {
            const response = await Axios.get(`http://192.168.0.2:3000/search/${page}&10/${query}`);

            const newPosts: IPosts[] = response.data;
            setMessage("Carregar maisena");
            setShowLoading(false);

            if (newPosts.length === 0) {
                setHasMore(false);
            } else {
                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
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
        setPosts([]); // Limpar os posts ao iniciar uma nova pesquisa
        setPage(0);
        setHasMore(true);
        console.log(hasMore);
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
                            <>

                                {hasMore ? (
                                    <div className="feed-btn-container">
                                        <LoadMoreButton
                                            message="CARREGAR MAIS teste"
                                            onClick={loadMorePosts}
                                            showLoading={showLoading}
                                        />
                                    </div>
                                ) : (
                                    posts.length === 0 ? (
                                        <div className="feed-btn-container">
                                            <h3>Desculpe, não encontrei posts relacionados.</h3>
                                        </div>
                                    ) : null
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;