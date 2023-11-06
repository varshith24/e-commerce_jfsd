import React, { useEffect, useState } from 'react'
import UserService from '../../../services/UserService'
import NavBar from '../../NavBar/NavBar'

function Users() {

    const [data, setData] = useState([])

    useEffect(() => {
        UserService.getAllUsers()
            .then((res) => {
                setData(res.data);
                console.log(res.data); // Log data here
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);


    return (
        <div>
            <NavBar />
            <div className='container'>
                <table className="table table-hover table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>User ID</th>
                            <th scope="col">User name</th>
                            <th scope="col">email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Location</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody className="table-striped">
                        {
                            data.map((item, index) => (
                                <tr key={index} className='p-5'>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.url} alt="User Avatar" style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "0.7rem" }} />
                                        {item.username}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.phno}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.location}</td>
                                    <td>{
                                        item.isAdmin ? "Admin" : "customer"
                                        }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users