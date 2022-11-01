// salvando as configurações da API
import axios from "axios";

const api  = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})

export default {
    all(){
        return api.get('/coins/list')
    }
}