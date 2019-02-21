import axios from 'axios'

export class API {

    constructor() {
        this.baseURL = "http://www.mocky.io/v2/5c6e68903400004f00892c1c"
    }

    getProjects() {
        return axios.get(this.baseURL).then(response => response.data)
    }

}