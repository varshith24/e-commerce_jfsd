import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductService from '../../services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function Catalog() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('phone');
    const [dummy, setDummy] = useState('');
    const [modal, setModal] = useState(null);

    const handleToCart = (e) => {
        e.preventDefault();
        if (modal) {
            const data = {
                "pid": modal.product_id,
                "name": modal.product_title,
                "url": modal.product_image,
                "price": modal.product_lowest_price,
                "email": userData.email,
                "category": modal.product_category
            };
            ProductService.saveUser(data);
            toast.success('🛒 Data Added to Cart!', {
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
    }

    useEffect(() => {
        setLoading(true);

        fetch(
            `https://price-api.datayuge.com/api/v1/compare/search?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&product=${search}&page=1`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [search]);

    return (
        <div>
            <NavBar />
            <div className='text-align-center mb-5' style={{ textAlign: "center", textDecoration: "underline" }}>
                <h1 className='text-align-center'>Store</h1>
            </div>
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
                <h2>Loading...</h2>
            ) : (
                <div className="container-cards m-5 ml-5 mr-5" id="product-cards" style={{ display: "flex", flexWrap: "wrap" }}>
                    {data.data.map((item, index) => (
                        <div key={index} className="col-md-3 py-3 py-md-0">
                            <div className="card m-2">
                                <img src={item.product_image} alt={item.product_title} className='m-5' />
                                <div className="card-body">
                                    <h3 className="text-center">{item.product_title}</h3>
                                    <p className="text-center">Category: {item.product_category}</p>
                                    <div className="star text-center">
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star checked"></i>
                                    </div>
                                    <h2>₹{item.product_lowest_price}</h2>
                                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                        setModal(item);
                                    }}>
                                        Know More
                                    </button> */}
                                    <Link to={`/product/${item.product_id}`} className="btn btn-primary">Know More</Link>

                                </div>
                            </div>
                        </div>
                    ))}
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
