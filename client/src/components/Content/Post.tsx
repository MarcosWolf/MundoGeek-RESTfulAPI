import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'; // Importar a localização brasileira

import { IPosts } from '../Models/IPosts';

const basePath = "/img/posts/";

interface IStatePost {
    loading: boolean,
    getPost: IPosts[],
    errorMsg: string
}

interface IStateRelated {
    loading: boolean,
    getRelated: IPosts[],
    errorMsg: string
}

const Post:React.FC = () => {

    const { id } = useParams<{ id: string }>();

    const [statePost, setStatePost] = useState<IStatePost>({
        loading: false,
        getPost: [] as IPosts[],
        errorMsg: ''
    })

    const [stateRelated, setStateRelated] = useState<IStateRelated>({
        loading: false,
        getRelated: [] as IPosts[],
        errorMsg: ''

    })

    useEffect(() => {
        window.scrollTo(0,0);
        setStatePost({...statePost, loading: true});
        setStateRelated({...stateRelated, loading: true});

        const fetchPost = async () => {
            try {
            //Axios.get(`https://192.168.0.2:3000/${id}`)
                Axios.get(`https://api-mundogeek.onrender.com/post/${id}`)
                    .then((response) => setStatePost({        
                        ...statePost, loading:false, getPost:response.data
                    }))
                    .catch(err => setStatePost({
                        ...statePost, loading:false, errorMsg:err.message
                    }));
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        }

        const fetchRelated = async () => {
            try {
                //Axios.get(`https://api-mundogeek.onrender.com/relatedposts/${id}`)
                Axios.get(`http://192.168.0.8:3000/relatedposts/${id}`)
                    .then((response) => setStateRelated({
                        ...stateRelated, loading:false, getRelated:response.data
                    }))
                    .catch(err => setStateRelated({
                        ...stateRelated, loading:false, errorMsg:err.message
                    }));
            } catch (error) {
                console.error('Erro ao buscar posts relacionados:', error);
            }
        }

        fetchPost();
        fetchRelated();
    },[id]);

    const {getPost} = statePost;
    const {getRelated} = stateRelated;

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

            <div className="related">
                <div className="related-container">
                    <h1>Posts Relacionados</h1>
                    <div className="related-group">
                        {
                            getRelated.length > 0 && getRelated.map(related => (
                                <div className="related-card" key={related.postID}>
                                    <Link to={"../post/" + related.postID}><img className="related-thumbnail" src={basePath + related.postTHUMBNAIL}/></Link>
                                    <Link to={"../post/" + related.postID}><h2 className="related-category">{related.categoryNAME}</h2></Link>
                                    <Link to={"../post/" + related.postID}><h1 className="related-title">{related.postTITLE}</h1></Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;