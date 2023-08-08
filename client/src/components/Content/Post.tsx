import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';

import { IPosts } from '../Models/IPosts';

const basePath = "/img/posts/";

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

        //Axios.get(`https://192.168.0.2:3000/${id}`)
        Axios.get(`https://api-mundogeek.onrender.com/post/${id}`)
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
                    <div key={post.postID}>
                        <h2>{post.postTITLE}</h2>
                        <img src={basePath + post.postTHUMBNAIL}/>
                        <p>{post.categoryNAME}</p>
                        <p>{post.postAUTHOR}</p>
                        <p>{post.postCONTENT}</p>
                    </div>
                ))
            }
        </>
    );
}

export default Post;