import axios from 'axios';

export class Api {
    constructor(url, data = {}) {
        this.url = url;
        this.data = data;
        this.h = { headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': "application/json" } };
    }
    method(method) {
        let answer;
        switch (method) {
            case 'post':
                axios.post(this.url, this.data, this.h).then(res => answer = res.data).catch(err => console.log(err));
                break;
            case 'get':
                axios.get(this.url, this.h).then(res => answer = res.data).catch(err => console.log(err));
                break;
            case 'patch':
                axios.patch(this.url, this.data, this.h).then(res => answer = res.data).catch(err => console.log(err));
                break;
            case 'delete':
                axios.delete(this.url, this.data, this.h).then(res => answer = res.data).catch(err => console.log(err));
                break;
            default:
                answer = "Это шо такое";
        }
        return answer;
    }
}
