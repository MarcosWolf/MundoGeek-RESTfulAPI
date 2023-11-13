import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import { IPosts } from '../../interfaces/IPosts';
import { Loader } from '../../Loader';
import LoadMoreButton from '../../buttons/LoadMoreButton';
import { format } from 'date-fns';

export const PostsData = () => {
    const { data, error, isLoading, fetchData } = useApi<IPosts[]>();
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchData(`/lastnews/${page}&10`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <p>Ocorreu um erro, tente novamente mais tarde.</p>
    }

    return (
        <>
            { data && (
                data.map(post => (
                    <div className="feed-card" key={post.postID}>
                        <div className="feed-img">
                            <Link to={`/post/${post.postID}`}>
                                <img src={`/img/posts/${post.postTHUMBNAIL}`} />
                            </Link>
                        </div>
                        <div className="feed-data">
                            <Link to={`/post/${post.postID}`}>
                                <h3>{post.categoryNAME}</h3>
                                <h2>{post.postTITLE}</h2>
                                <p>{format(new Date(post.postDATE), 'dd/MM/yyyy')}</p>
                            </Link>
                        </div>
                    </div>
                ))
            )}            
        </>
    );
}