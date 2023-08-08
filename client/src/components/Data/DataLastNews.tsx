import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

import { IPosts } from "../Models/IPosts";

const basePath = "/img/posts/";

interface IState {
    loading: boolean,
    getPosts: IPosts[],
    errorMsg: string
}

const DataLastNews:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        getPosts: [] as IPosts[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        //Axios.get(`https://192.168.0.2:3000/lastnews/`)
        Axios.get(`https://api-mundogeek.onrender.com/lastnews/`)
            .then((response) => setState({
                ...state, loading:false, getPosts:response.data
            }))
            .catch(err => setState({
                ...state, loading:false, errorMsg:err.message
            }));
    },[]);

    const {getPosts} = state;

    return (
        <>
            {
                getPosts.length > 0 && getPosts.map( post => (
                    <div className="feed-card" key={post.postID}>
                        <div className="feed-img">
                            <Link to={"post/" + post.postID}><img src={basePath + post.postTHUMBNAIL} /></Link>
                        </div>
                        <div className="feed-data">
                            <Link to={"post/" + post.postID}><h2>{post.postTITLE}</h2></Link>
                            <p>Data</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default DataLastNews;