import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();

    return (
        <>
            <div className="manutencao">
                <h2>Sessão em desenvolvimento</h2>
            </div>
        </>
    );
}

export default Post;