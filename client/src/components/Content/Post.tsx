import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';

import { IPosts } from '../Models/IPosts';

interface IState {
    loading: boolean,
    getPost: IPosts[],
    errorMsg: string
}

const Post:React.FC = () => {

    const { id } = useParams();

    const [state, setState] = useState<IState>({
        loading: false,
        getPost: [] as IPosts[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        Axios.get(`https://api-mundogeek.onrender.com/news/${id}`)
            .then((response) => setState({        
                ...state, loading:false, getPost:response.data
            }))
            .catch(err => setState({
                ...state, loading:false, errorMsg:err.message
            }));
        },[]);

    const {getPost} = state;

    return (
        <>
            {
                getPost.length > 0 && getPost.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.thumbnail}/>
                        <p>{post.category}</p>
                        <p>{post.author}</p>
                        <p>{post.content}</p>
                    </div>
                ))
            }
        </>
    );
}

export default Post;