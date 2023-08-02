import {useState, useEffect} from "react";
import { IHighlights } from "../Models/IHighlights";
import { HighlightsServices } from "../Services/HighlightsServices";
import { Link } from "react-router-dom";

interface IState {
    loading: boolean,
    highlights: IHighlights[],
    errorMsg: string
}

const DataHighlights:React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        highlights: [] as IHighlights[],
        errorMsg: ''
    })

    useEffect(() => {
        setState({...state, loading: true});

        HighlightsServices.getAllHighlights()
            .then(res => setState({
                ...state, loading:false, highlights:res.data
            }))
            .catch(err => setState({
                ...state, loading:false, errorMsg:err.message
            }));
    },[]);

    const {highlights} = state;

    return (
        <>
            {
                highlights.length > 0 && highlights.map( highlight => (
                    <div className="destaques-card" key={highlight.id}>
                        <Link to={highlight.url}><img src={highlight.img} /></Link>
                        <h2>{highlight.area}</h2>
                        <Link to={highlight.url}><p>{highlight.title}</p></Link>
                    </div>
                ))
            }
        </>
    );
}

export default DataHighlights