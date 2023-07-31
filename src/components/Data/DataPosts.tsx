import {useState, useEffect} from "react";
import { IPosts } from "../Models/IPosts";
import { PostsServices } from "../Services/PostsServices";

interface IState {
    loading: boolean,
    posts: IPosts[],
    errorMsg: string
}

const DataPosts:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        posts: [] as IPosts[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        PostsServices.getAllPosts()
            .then(res => setState({
                ...state, loading:false, posts:res.data
            }))
            .catch(err => setState({
                ...state, loading:false, errorMsg:err.message
            }));
    },[]);

    const {posts} = state;

    return (
        <>
            {
                posts.length > 0 && posts.map( post => (
                    <div className="post-card">
                        <div className="post-img">
                            <a href={post.url}><img src={post.img} /></a></div>
                        <div className="post-data">
                            <h2><a href={post.url}>{post.title}</a></h2>
                            <p>{post.date}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default DataPosts