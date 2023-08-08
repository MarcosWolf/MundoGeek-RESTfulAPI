import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

import { IPosts } from "../Models/IPosts";

interface IState {
    loading: boolean,
    getPosts: IPosts[],
    errorMsg: string
}

const DataHighlights:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        getPosts: [] as IPosts[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        Axios.get(`https://api-mundogeek.onrender.com/highlights/`)
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
                    <div className="destaques-card" key={post.postID}>
                        <Link to={"post/" + post.postID}><img src={post.postTHUMBNAIL} /></Link>
                        <h2>{post.categoryNAME}</h2>
                        <Link to={"post/" + post.postID}><p>{post.postTITLE}</p></Link>
                    </div>
                ))
            }
        </>
    );
}

export default DataHighlights