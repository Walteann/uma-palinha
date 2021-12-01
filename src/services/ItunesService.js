import axios from "axios";

const API_URL = 'https://itunes.apple.com';

export class ItunesService {

    static searchMusicByTerm(params) {
        params.limit = 20;
        return axios.get(API_URL + '/search', {params})
    }

}