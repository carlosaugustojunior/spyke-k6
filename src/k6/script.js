import { sleep, check } from "k6";
import http from 'k6/http';

export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<1000'], //95% das requisições devem responder em até 1 segundo
        http_req_failed: ['rate<0.5'] //Aceitável que ocorra erro em 1% das requisições
    }
}

export default () => {
    let response = http.get('http://localhost:5216/api/v1/categories');

    check(response, {
        'status code should be 200' : (r) => r.status === 200
    })

    sleep(1);
}