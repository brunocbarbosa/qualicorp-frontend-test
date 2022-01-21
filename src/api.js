import axios from 'axios'

const api = axios.create({
  baseURL: 'http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/'
})

export default api
