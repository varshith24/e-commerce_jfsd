// import React from 'react'

// function AddNotification() {
//     const userData = JSON.parse(localStorage.getItem("userData"))
//     const email = userData.email
//     const username = userData.username
//   return (
//     <div class="center">
//             <div class="rcontainer">
//                 <div class="text">
//                     Login Form
//                 </div>
//                 <form onSubmit={handleLogin}>
//                     <div class="data">
//                         <label>Email</label>
//                         <input type="text" required value={email} />
//                     </div>
//                     <div class="data">
//                         <label>Password</label>
//                         <input type="text" required
//                             value={username}
//                         />
//                     </div>
//                     <div class="forgot-pass">
//                         <Link to="#">Forgot Password?</Link>
//                     </div>
//                     <div class="btn">
//                         <div class="inner"></div>
//                         <button type="submit">login</button>
//                     </div>
//                     <div class="signup-link">
//                         Not Link member? <Link to="/register">Signup now</Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//   )
// }

// export default AddNotification