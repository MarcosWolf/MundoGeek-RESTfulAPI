import axios from 'axios'

export class LastNewsServices {
    private static URL:string = '/api/lastnews.json'

    public static getAllLastNews() {
        let PostURL:string = `${this.URL}`
        return axios.get(PostURL)
    }
}