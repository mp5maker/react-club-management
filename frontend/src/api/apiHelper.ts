import axios from "./axios"

const apiHelper = {
  members: {
    getAll: () => axios.get('/api/v1/members')
  }
}


export default apiHelper