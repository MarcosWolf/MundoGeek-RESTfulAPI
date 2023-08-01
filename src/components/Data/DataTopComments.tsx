import {useState, useEffect} from "react";
import { ITopComments } from "../Models/ITopComments";
import { TopCommentsServices } from "../Services/TopCommentsServices";

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
                            <a href={topComment.url}><img src={topComment.img} /></a></div>
                        <div className="post-data">
                            <h2><a href={topComment.url}>{topComment.title}</a></h2>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default DataTopComments