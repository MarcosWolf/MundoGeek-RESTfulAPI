import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import PostList from "../Posts/PostsLists";
import LoadMoreButton from "../Posts/LoadMoreButton";

import { IPosts } from "../Models/IPosts";

const Search: React.FC = () => {
    const { query: currentQuery } = useParams<{ query: string | undefined }>();
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [message, setMessage] = useState('Carregar mais');
    const [showLoading, setShowLoading] = useState(false);
    const [error404, setError404] = useState<boolean>(false);

    const buildAxiosUrl = () => {
        //let url = "https://api-mundogeek.onrender.com/search/";
        let url = "http://192.168.0.2:3000/search/";

        url += `${page}&10`;

        if (currentQuery) {
            url += `/${currentQuery}`;
          }
      
        return url;
    }

    const loadMorePosts = async () => {
      setShowLoading(true);
      try {
          const response = await Axios.get(buildAxiosUrl());
  
          const newPosts: IPosts[] = response.data;
          setMessage("Carregar mais");
          setShowLoading(false);
  
          if (newPosts.length === 0) {
              setHasMore(false);
          } else {
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPage((prevPage) => prevPage + 10);
          }
      } catch (error: any) {
          //console.error("Error loading more posts: ", error);
          if (error.response && error.response.status === 404) {
              setError404(true);
              setMessage("Desculpe, não encontrei posts relacionados.");
              setShowLoading(false);
          }
      }
  };

  useEffect(() => {
    if (currentQuery) {
        setPosts([]);
        setPage(0);
        setHasMore(true);
    }
    loadMorePosts();
    console.log(currentQuery);
}, [currentQuery]);

    return (
        <>
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-left">
                        <h1><span>Buscando por "{currentQuery}"</span></h1>
                        <PostList posts={posts || []} />
                        {error404 ? (
                            <>
                                <p>Debug: página {page}</p>
                                <h3>{message}</h3>
                            </>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;