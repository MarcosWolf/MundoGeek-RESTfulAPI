import Post from "../components/Content/Post";

import { useParams } from "react-router-dom";

const News = () => {
    const { id } = useParams();

    return (
        <>
            <Post />
        </>
    );
}

export default News;