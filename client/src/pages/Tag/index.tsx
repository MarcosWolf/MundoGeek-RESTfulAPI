import { useParams } from 'react-router-dom';

export interface IJsonResponse {
    data: ITags[];
}

export interface ITags {
    "tagID": number;
    "tagNAME": string;
}

export const Tag = () => {
    const { id } = useParams<{ id: string }>();
    const [loading, data, error, request] = useAxios<IJsonResponse>({ method: 'GET', url: `http://192.168.0.10:3000/tagname/${id}`});

    if (loading) return <p>Loading...</p>;

    if (error !== '') return <p>{error}</p>;

    if (!data) return <p>Data was null</p>;

    return (
          <>
            Aloha
          </>
      );
}