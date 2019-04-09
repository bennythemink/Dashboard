import axios from 'axios'

export class API {

    constructor() {
        // this.baseURL = "http://www.mocky.io/v2/"
        this.baseURL = "https://ancient-woodland-24994.herokuapp.com/api/v2/"
        this.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzkyMDc1NzRiMzRhYTEyMTg1ZjlkZmIiLCJpYXQiOjE1NTM0MDQwOTd9.zFpA1qDtouUexHoyBkPW6OJjZUih9cDGoe2SNhhOWnI';
    }

    createAxiosInstance(resource) {
        return axios.create({
            baseURL: this.baseURL + resource + '/',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': this.authToken
            }
        });
    }

    getProjects() {
        const instance = this.createAxiosInstance("projects"); 
        return instance.get().then(response => response.data);
    }

    getStaffUtilisation() {
        const instance = this.createAxiosInstance("utilisations");
        return instance.get().then(response => response.data);
    }

    getInvoices() {
        const instance = this.createAxiosInstance("invoices");
        return instance.get().then(response => response.data);
    }
}