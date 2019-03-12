import axios from 'axios'

export class API {

    constructor() {
        this.baseURL = "http://www.mocky.io/v2/"
    }

    getProjects() {
        return axios.get(this.baseURL + "5c7786fa30000059009d62d1").then(response => response.data)
    }

    getStaffUtilisation() {
        return axios.get(this.baseURL + "5c783f303000000d0049ae00").then(response => response.data)
    }

    getInvoices() {
        return axios.get(this.baseURL + "5c6fd91638000079003fca09").then(response => response.data)
    }

    getHappiness() {
        return axios.get(this.baseURL + "5c6f8d693400001059893126").then(response => response.data)
    }
    

}