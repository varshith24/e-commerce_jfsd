import React from 'react'
import './Profile.css'
import NavBar from '../NavBar/NavBar'
function Profile() {
    const data = JSON.parse(localStorage.getItem("userData"))
  return (
   <div>
    <NavBar/>
     <div class="pcontainer">
        <div class="box">
            {console.log(data)}
            <img src={data.url} alt=""/>
            <ul>
                <li>{data.username}</li>
                <li>20 years</li>
                <li>Student</li>
                <li>
                    <i style={{fontSize:"24px" }}class="fa"></i>
                    <i style={{fontSize:"24px" }} class="fa"></i>
                    <i style={{fontSize:"24px" }} class="fa"></i>
                </li>
            </ul>
        </div>
        <div class="About">
            <ul>
                <h1>about</h1>
            </ul>
            <ul>
                <h3>Work</h3>
                <li>Student</li>
            </ul>
            <ul>
                <h3>Gender</h3>
                <li>{data.gender}</li>
            </ul>
            <ul>
                <h3>location</h3>
                <li>{data.location}</li>
            </ul>
            <ul>
                <h3>More Info</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).</p>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>{data.phno}</li>
            </ul>
        </div>
    </div>
   </div>
  )
}

export default Profile