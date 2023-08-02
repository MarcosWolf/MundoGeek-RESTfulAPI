import {useState, useEffect} from "react";
import { ITopComments } from "../Models/ITopComments";
import { TopCommentsServices } from "../Services/TopCommentsServices";
import { Link } from 'react-router-dom';

interface IState {
    loading: boolean,
    topComments: ITopComments[],
    errorMsg: string
}

const DataTopComments:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        topComments: [] as ITopComments[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        TopCommentsServices.getAllTopComments()
            .then(res => setState({
                ...state, loading:false, topComments:res.data
            }))
            .catch(err => setState({
                ...state, loading:false, errorMsg:err.message
            }));
    },[]);

    const {topComments} = state;

    return (
        <>
            {
                topComments.length > 0 && topComments.map( topComment => (
                    <div className="post-card">
                        <div className="post-img">
                            <Link to={topComment.url}><img src={topComment.img} /></Link>
                        </div>
                        <div className="post-data">
                            <Link to={topComment.url}><h2>{topComment.title}</h2></Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default DataTopComments