import axios from 'axios'

export class PostsServices {
    private static URL:string = '/api/posts.json'

    public static getAllPosts() {
        let PostURL:string = `${this.URL}`
        return axios.get(PostURL)
    }
}