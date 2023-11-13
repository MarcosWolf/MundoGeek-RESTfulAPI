import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import { IPosts } from '../../interfaces/IPosts';
import { Loader } from '../../Loader';

export const HighlightsData = () => {
    const { data, error, isLoading, fetchData } = useApi<IPosts[]>();

    useEffect(() => {
        fetchData('/highlights');
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
                    <div className="highlights-card" key={post.postID}>
                        <Link to={"post/" + post.postID}>
                            <img src={`/img/posts/${post.postTHUMBNAIL}`} />
                            <h2>{post.categoryNAME}</h2>
                            <p>{post.postTITLE}</p>
                        </Link>
                    </div>
                ))
            )}
        </>
    );

}