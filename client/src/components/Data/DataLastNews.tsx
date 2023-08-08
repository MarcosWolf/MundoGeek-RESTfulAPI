import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

import { IPosts } from "../Models/IPosts";

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
                    <div className="post-card" key={post.id}>
                        <div className="post-img">
                            <Link to={"post/" + post.id}><img src={post.thumbnail} /></Link>
                        </div>
                        <div className="post-data">
                            <Link to={"post/" + post.id}><h2>{post.title}</h2></Link>
                            <p>Data</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default DataLastNews;