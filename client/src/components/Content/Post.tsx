import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import DOMPurify from "dompurify";
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
            <div className="post">
                {
                    getPost.length > 0 && getPost.map(post => (
                        <div className="post-container" key={post.postID}>
                            <p className="post-category">{post.categoryNAME}</p>
                            <h2 className="post-title">{post.postTITLE}</h2>
                            <h3 className="post-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <div className="post-info">
                                <img className="post-portrait" src="https://avatars.githubusercontent.com/u/26293082?s=400&u=0082394880a1718cd9145af005c010b727915257&v=4"/>
                                <p className="post-author">Publicado por <strong>Marcos Vinícios</strong></p>
                                <hr/>
                                <p className="post-datetime">12 de agosto de 2023 às 15:34</p>
                            </div>
                            <img className="post-image" src={basePath + post.postTHUMBNAIL}/>
                            <p className="post-image-description">Image caption</p>
                            <div className="post-content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postCONTENT)}} />
                        </div>
                    ))
                }
            </div>

            <div>
                Veja mais
            </div>
        </>
    );
}

export default Post;