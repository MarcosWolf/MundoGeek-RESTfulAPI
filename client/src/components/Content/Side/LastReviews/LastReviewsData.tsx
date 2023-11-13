import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../../../hooks/useApi';
import { IPosts } from '../../../interfaces/IPosts';
import { Loader } from '../../../Loader';

export const LastReviewsData = () => {
    const { data, error, isLoading, fetchData } = useApi<IPosts[]>();

    useEffect(() => {
        fetchData('/lastreviews');
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
                                <h2>{post.postTITLE}</h2>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}