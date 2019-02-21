import axios from 'axios'

export class API {

    constructor() {
        this.baseURL = "http://www.mocky.io/v2/5c6e61973400000d00892bd7"
    }

    getProjects() {
        return axios.get(this.baseURL).then(response => response.data)
    }

}