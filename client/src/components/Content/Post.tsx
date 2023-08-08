import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';


const Post = () => {

    const { id } = useParams();

    const [listNews, setListNews] = useState();

    useEffect(() => {
//        Axios.get(`https://api-mundogeek.onrender.com/news/${id}`).then((response) => {
        Axios.get(`https://192.168.0.2:3000/news/${id}`).then((response) => {
            setListNews(response.data);
            //console.log(setListNews);
        });
    }, []);

    return (
        <>
            <div className="manutencao">
                {
                    typeof listNews !== "undefined" && listNews.map(news => (
                        <div key={news.id}>
                            <img src={news.thumbnail}/>
                            <h2>{news.title}</h2>
                            <p>{news.category}</p>
                            <p>{news.author}</p>
                            <p>{news.date}</p>
                            <p>{news.content}</p>
                            
                        </div>
                    )
                    )
                }
            </div>
        </>
    );
}

export default Post;