import axios from "axios";

const API_URL = 'https://uma-palinha-proxy.herokuapp.com';

export class ItunesService {

    static searchMusicByTerm(params) {
        params.limit = 20;
        return axios.get(`${API_URL}/api/v1/musics`, {params})
    }

}