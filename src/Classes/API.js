import axios from 'axios'

export class API {

    constructor() {
        this.baseURL = "http://www.mocky.io/v2/"
    }

    getProjects() {
        return axios.get(this.baseURL + "5c6fd79938000079003fc9ff").then(response => response.data)
    }

    getStaffUtilisation() {
        return axios.get(this.baseURL + "5c6e6b493400005500892c38").then(response => response.data)
    }

    getInvoices() {
        return axios.get(this.baseURL + "5c6fd91638000079003fca09").then(response => response.data)
    }

    getHappiness() {
        return axios.get(this.baseURL + "5c6f8d693400001059893126").then(response => response.data)
    }
    

}