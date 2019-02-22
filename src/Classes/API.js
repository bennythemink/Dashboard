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

    getInvoices() {
        return axios.get(this.baseURL + "5c6f840734000020568930f1").then(response => response.data)
    }

    getHappiness() {
        return axios.get(this.baseURL + "5c6f8d693400001059893126").then(response => response.data)
    }
    

}