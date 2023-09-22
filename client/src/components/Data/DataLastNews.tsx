import {useState, useEffect} from "react";
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";

import { IPosts } from "../Models/IPosts";

interface DataLastNewsProps {
    tagID?: number;
}

const DataLastNews: React.FC<DataLastNewsProps> = ({ tagID }) => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState(false);
    const [error404, setError404] = useState<boolean>(false);

    const buildAxiosUrl = () => {
        //let url = "https://api-mundogeek.onrender.com/lastnews/";
        let url = "http://192.168.0.4:3000/lastnews/";

        // Adicione a página atual à URL
        url += `${page}&10`;
    
        // Se um tagID for fornecido, adicione-o à URL
        
        if (tagID !== null) {
          url += `/${tagID}/`;
        }
        
        console.log(url);
        return url;
      };

      const loadMorePosts = async () => {
        setShowLoading(true);
        try {
          const response = await Axios.get(buildAxiosUrl());
      
          if (response.status === 404) {
            // Lidar com erro 404 aqui, por exemplo:
            setError404(true);
            setMessage("Tag não encontrada");
            setShowLoading(false);
            return;
          }
      
          const newPosts: IPosts[] = response.data;
          setMessage("Carregar mais");
          setShowLoading(false);
      
          if (newPosts.length === 0) {
            setHasMore(false);
          } else {
            // Adicione os novos posts à lista existente
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPage((prevPage) => prevPage + 10);
          }
        } catch (error: any) {
          console.error("Error loading more posts: ", error);
          if (error.response && error.response.status === 404) {
            // Lidar com erro 404 aqui também, se for o caso
            setError404(true);
            setMessage("Desculpe, não encontrei posts relacionados.");
            setShowLoading(false);
          }
        }
      };

    useEffect(() => {
        loadMorePosts();
    }, []);

    return (
        <>
            <PostList posts={posts || []} />
            {error404 ? (
                <h3>{message}</h3>
            ) : (
                <>
                {hasMore && (
                    <div className="feed-btn-container">
                    <LoadMoreButton
                        message={message}
                        onClick={loadMorePosts}
                        showLoading={showLoading}
                    />
                    </div>
                )}
                </>
            )}
        </>
    );
};

export default DataLastNews;
