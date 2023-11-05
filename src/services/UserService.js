import axios from "axios";

const URL = "http://localhost:8080/user"
class UserService {

    addUser(user) {
        return axios.post(`${URL}/save`, user)
    }
    async getLoginEmail(email, data) {
       return  axios.post(`${URL}/email/${email}`, data)
    }

    async getAllUsers(){
        return axios.get(`${URL}/all`)
    }

}
const a = new UserService();
export default a;