import axios from 'axios'

export class TopCommentsServices {
    private static URL:string = '/api/topcomments.json'

    public static getAllTopComments() {
        let PostURL:string = `${this.URL}`
        return axios.get(PostURL)
    }
}