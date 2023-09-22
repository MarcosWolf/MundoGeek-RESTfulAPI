import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";
import DataLastNews from "../Data/DataLastNews";

import { ITags } from "../Models/ITags";
import { IPosts } from "../Models/IPosts";

interface IStateTag {
    loading: boolean,
    getTag: ITags[],
    errorMsg: string
}

const Tag: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [stateTag, setStateTag] = useState<IStateTag>({
        loading: false,
        getTag: [] as ITags[],
        errorMsg: ''
    });

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
        window.scrollTo(0,0);

        setStateTag({...stateTag, loading: true});

        const fetchTag = async () => {
            try {
                Axios.get(`http://192.168.0.4:3000/tagname/${id}`)
                    .then((response) => setStateTag({
                        ...stateTag, loading: false, getTag:response.data
                    }))
                    .catch(err => setStateTag({
                        ...stateTag, loading:false, errorMsg:err.message
                    }));
            } catch (error) {
                console.error('Erro ao buscar tags relacionadas:', error);
            }
        }

        fetchTag();
        loadMorePosts();
    }, []);

    const { getTag } = stateTag;

    return (
        <>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-left">
                    {getTag && getTag.length > 0 ? (
                        <>
                        <h1><span>{getTag[0].tagNAME}</span></h1>
                        <DataLastNews tagID={getTag[0].tagID} />
                        
                        </>
                    ) : (
                        <p>Carregando...</p>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tag;