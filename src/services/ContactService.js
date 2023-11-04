import axios from "axios";

const URL = "http://localhost:8080/contact"

class ContactService{
    async addContact(data)
    {
        return await axios.post(`${URL}/save`,data)
    }
    async getAllContact(){
        return await axios.get(`${URL}/all`)
    }
}
export default new ContactService();