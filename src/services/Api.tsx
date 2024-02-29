import axios from "axios"

const Api=axios.create({
    baseURL:"https://brasilapi.com.br/docs#tag/"
})

export default Api