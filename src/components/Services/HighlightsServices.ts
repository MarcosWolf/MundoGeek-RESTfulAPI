import axios from 'axios'

export class HighlightsServices {
    private static URL:string = '/api/highlight.json'

    public static getAllHighlights() {
        let HighlightURL:string = `${this.URL}`
        return axios.get(HighlightURL)
    }
}