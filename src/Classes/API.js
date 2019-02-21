import axios from 'axios'

export class API {

    constructor() {
        this.baseURL = "http://www.mocky.io/v2/5c6e4f6e3400004301892b67"
    }

    getProjects() {
        return axios.get(this.baseURL).then(response => response.data)
    }

}