import {useState, useEffect} from "react";
import { ILastNews } from "../Models/ILastNews";
import { LastNewsServices } from "../Services/LastNewsServices";
import { Link } from "react-router-dom";

interface IState {
    loading: boolean,
    lastNews: ILastNews[],
    errorMsg: string
}

const DataPosts:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        lastNews: [] as ILastNews[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        LastNewsServices.getAllLastNews()
            .then(res => setState({
                ...state, loading:false, lastNews:res.data
            }))
            .catch(err => setState({
                ...state, loading:false, errorMsg:err.message
            }));
    },[]);

    const {lastNews} = state;

    return (
        <>
            {
                lastNews.length > 0 && lastNews.map( lastNew => (
                    <div className="post-card">
                        <div className="post-img">
                            <Link to={lastNew.url}><img src={lastNew.img} /></Link>
                        </div>
                        <div className="post-data">
                            <Link to={lastNew.url}><h2>{lastNew.title}</h2></Link>
                            <p>{lastNew.date}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default DataPosts