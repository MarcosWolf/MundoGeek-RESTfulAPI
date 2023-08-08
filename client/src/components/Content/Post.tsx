import {useState, useEffect} from 'react';
import Axios from 'axios';

const Post = () => {

    const [listNews, setListNews] = useState();

    useEffect(() => {
        Axios.get("https://api-mundogeek.onrender.com/lastnews").then((response) => {
            setListNews(response.data);
            console.log(setListNews);
        });
    }, []);

    return (
        <>
            <div className="manutencao">
                {
                    

                }
            </div>
        </>
    );
}

export default Post;