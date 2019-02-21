import axios from 'axios'

export class API {

    constructor() {
        this.baseURL = "http://www.mocky.io/v2/"
    }

    getProjects() {
        return axios.get(this.baseURL + "5c6e68903400004f00892c1c").then(response => response.data)
    }

    getStaffUtilisation() {
        return axios.get(this.baseURL + "5c6e6b493400005500892c38").then(response => response.data)
    }

}