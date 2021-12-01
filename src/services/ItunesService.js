const API_URL = 'https://itunes.apple.com/search';

export class ItunesService {


    static async searchMusicByTerm(params) {
        try {

            let url = new URL(API_URL)
            params.limit = 20;
            
            url.search = new URLSearchParams(params);
            const response = await fetch(url);
            const data = await response.json();
            return data;


        } catch (error) {
            console.error(error);
        }
    }

}