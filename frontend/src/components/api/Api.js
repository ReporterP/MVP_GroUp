import axios from 'axios';

// TODO: delete api.js and create split file for work api wtih axios

export class Api {
    constructor(url, data) {
        this.url = url;
        this.data = data;
        this.h = { headers: { "Access-Control-Allow-Origin": "*", 'Content-Type': "application/json" } };
    }
    method(method) {
        let resAns;

        let answer = ans => resAns = ans;

        if(method === 'post' || method === 'delete' || method === 'patch'){
            axios({
                method: method,
                url: this.url,
                data: this.data,
                headers: this.h
            })
            .then(res => res.data)
            .catch(err => console.log(err));
        }else if (method === 'get') {
            axios({
                method: method,
                url: this.url,
                headers: this.h,
            })
            .then(res => answer(res.data)).catch(err => console.log(err));
        }

        return resAns;
    }   
}
