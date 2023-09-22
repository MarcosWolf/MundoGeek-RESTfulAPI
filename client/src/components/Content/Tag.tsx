import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import DataLastNews from "../Data/DataLastNews";

import { ITags } from "../Models/ITags";

interface IStateTag {
    loading: boolean,
    getTag: ITags[],
    errorMsg: string
}

const Tag: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [stateTag, setStateTag] = useState<IStateTag>({
        loading: false,
        getTag: [] as ITags[],
        errorMsg: ''
    });

    useEffect(() => {
        window.scrollTo(0,0);

        setStateTag({...stateTag, loading: true});

        const fetchTag = async () => {
            try {
                Axios.get(`https://api-mundogeek.onrender.com/tagname/${id}`)
                    .then((response) => setStateTag({
                        ...stateTag, loading: false, getTag:response.data
                    }))
                    .catch(err => setStateTag({
                        ...stateTag, loading:false, errorMsg:err.message
                    }));
            } catch (error) {
                console.error('Erro ao buscar tags relacionadas:', error);
            }
        }

        fetchTag();
        }, []);

    const { getTag } = stateTag;

    return (
        <>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-left">
                    {getTag && getTag.length > 0 ? (
                        <>
                        <h1><span>{getTag[0].tagNAME}</span></h1>
                        <DataLastNews tagID={getTag[0].tagID} />
                        
                        </>
                    ) : (
                        <>
                            
                        </>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tag;