import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'; // Importar a localização brasileira

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
                            <h3 className="post-subtitle">{post.postSUBTITLE}</h3>
                            <div className="post-info">
                                <img className="post-portrait" src={"/img/authors/" + post.authorIMAGE}/>
                                <p className="post-author">Publicado por <strong>{post.authorNAME}</strong></p>
                                <hr/>
                                <p className="post-datetime">{format(new Date(post.postDATE), "d 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}</p>
                                
                            </div>
                            <img className="post-image" src={basePath + post.postTHUMBNAIL}/>
                            <div className="post-content">
                                <ReactMarkdown children={post.postCONTENT} />
                                <ReactMarkdown>#### Hey, este post foi produzido com ChatGPT para fim de demonstração do Projeto.</ReactMarkdown>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Post;