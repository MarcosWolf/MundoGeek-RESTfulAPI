import axios from 'axios'

export class LastReviewsServices {
    private static URL:string = '/api/lastreviews.json'

    public static getAllLastReviews() {
        let PostURL:string = `${this.URL}`
        return axios.get(PostURL)
    }
}