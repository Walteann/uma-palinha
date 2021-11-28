import axios from "axios";

const API_URL = 'https://itunes.apple.com';

export class ItunesService {

    static searchMusicByTerm(params) {
        return axios.get(API_URL + '/search', {params})
    }
}