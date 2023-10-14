import axios from "axios";

const URL = "http://localhost:8080/user"
class UserService {

    addUser(user) {
        return axios.post(`${URL}/save`, user)
    }
    getLoginEmail(email, data) {
       return  axios.post(`${URL}/email/${email}`, data)
    }
}

export default new UserService();