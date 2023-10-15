import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductService from '../../services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export default function Catalog() {
    // Define the state variables
    const userData = JSON.parse(localStorage.getItem("userData"))
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('phone');
    const [dummy, setDummy] = useState('');
    const [modal, setModal] = useState({
        can_compare: true,
        is_available: true,
        product_category: "appliance",
        product_id: "ZTo1OTk3NDg",
        product_image: "https://images-api.datayuge.in/image/dHI6dy0zNzAsaC0zMzAsYy1hdF9tYXgvNTk5NzQ4LTE2My0x.jpg",
        product_link: "https://price-api.datayuge.com/api/v1/compare/detail?id=ZTo1OTk3NDg",
        product_lowest_price: 50590,
        product_sub_category: "appliance",
        product_title: "LG PS-Q19MNZF 1.5 Ton 5 Star",
    }
    )
    const handleToCart =  (e)=>{
        e.preventDefault();
        const data = {
            "pid" : modal.product_id,
            "name" : modal.product_title,
            "url" : modal.product_image,
            "price" : modal.product_lowest_price,
            "email" : userData.email,
            "category" : modal.product_category
        }
        // console.log(data);
         ProductService.saveUser(data);
        toast.success('🦄 Data Added to Cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
    }
    // Use the useEffect hook to fetch data when the 'search' state changes
    useEffect(() => {
        setLoading(true);

        fetch(
            `https://price-api.datayuge.com/api/v1/compare/search?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&product=${search}&page=1`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false); // Hide loading message after data is fetched
                // console.log(data.data)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [search]);

    return (
        <div>
            <NavBar />
           <div className='text-align-center mb-5' style={{textAlign:"center", textDecoration:"underline"}}> <h1 className='text-align-center'>Store</h1></div>
            <div className='d-flex justify-content-center mb-5'>
            <input
                type="text"
                value={dummy}
                name="search"
                onChange={(e) => {
                    setDummy(e.target.value);
                }} />
            <button className="btn btn-success m-2" onClick={() => setSearch(dummy)}>
                Search
            </button>
            </div>

            {loading ? (
                <div class="spinner-border text-align-center" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
                <div class="container-cards m-5 ml-5 mr-5" id="product-cards" style={{ display: "flex", flexWrap: "wrap" }}>
                    {data.data.map((item, index) => (
                        <div key={index} class="col-md-3 py-3 py-md-0">
                            {/* {console.log(item)} */}
                            <div class="card">
                                <img src={item.product_image} alt={item.product_title} 
                                />
                                <div class="card-body">
                                    <h3 class="text-center">{item.product_title}</h3>
                                    <p class="text-center">Category : {item.product_category}</p>
                                    <div class="star text-center">
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                    </div>
                                    <h2> &#x20b9;{item.product_lowest_price}</h2>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                        setModal(item)
                                    }}>
                                        Know More
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{modal.product_title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={modal.product_image} alt='' />
                                    </div>
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead className='bg-info text-white'>
                                            <tr >
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Category</th>
                                                <th>Price (&#x20b9;)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={modal.product_id}>
                                                <td>{modal.product_id}</td>
                                                <td>{modal.product_title}</td>
                                                <td>{modal.product_category}</td>
                                                <td>{modal.product_lowest_price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <p>Category : {modal.product_category}</p>
                                    <p>price :  &#x20b9;{modal.product_lowest_price}</p> */}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <Link to={`/product/${modal.product_id}`} class="btn btn-primary">Know More</Link>
                                    <button onClick={handleToCart} class="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        </div>
    );
}
