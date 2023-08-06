import axios from 'axios'

export class PostsServices {
    private static URL:string = '/api/posts.json'

    public static getAllPosts() {
        let HighlightURL:string = `${this.URL}`
        return axios.get(HighlightURL)
    }
}