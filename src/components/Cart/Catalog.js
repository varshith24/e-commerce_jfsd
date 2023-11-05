import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductService from '../../services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './ProductDataComponents/ProductCard';

export default function Catalog() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('phone');
    const [dummy, setDummy] = useState('');
    const [dummy2, setDummy2] = useState(0);
    const [dummy3, setDummy3] = useState(99999999);
    // const [modal, setModal] = useState(null);
    const [toogle, setToogle] = useState(false) 

    const [startPrice, setStartPrice] = useState(0)
    const [endPrice, setEndPrice] = useState(100000)

    const handleFilter = ()=>{
        setStartPrice(dummy2)
        setEndPrice(dummy3)
        setToogle(!toogle)
    }
    // "https://price-api.datayuge.com/api/v1/compare/search?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&product=${productName}&price_start=${priceStart}&price_end=${priceEnd}&page=1"
    useEffect(() => {
        setLoading(true);
    
        fetch(
            `https://price-api.datayuge.com/api/v1/compare/search?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&product=${search}&price_start=${startPrice}&price_end=${endPrice}&sort=popularity&page=1`
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
    }, [search, toogle, startPrice, endPrice]);
    
    return (
        <div>
            <NavBar />
            <div className='text-align-center mb-5' style={{
                textAlign: "center",
                fontSize: "72px",
                textTransform: "uppercase",
                mixBlendMode: "overlay",
                marginTop: "3%"
            }}>
                <h1 className='text-align-center'>Store</h1>
            </div>
            <div className='d-flex justify-content-center input-group mb-3'>
                <input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(dummy);
                        }
                    }}
                    className='form-control'
                    type="text"
                    value={dummy}
                    name="search"
                    onChange={(e) => {
                        setDummy(e.target.value);
                    }} style={{ maxWidth: "500px" }} />
                <button className="btn  btn btn-primary m-2" onClick={() => setSearch(dummy)}>
                    Search
                </button>
            </div>
            <div>
                <h2>Choose You Range</h2>
                <input type='text' value={dummy2} onChange={(e) => { setDummy2(e.target.value) }} />
                <input type='text' value={dummy3} onChange={(e) => { setDummy3(e.target.value) }} />
                <button className='btn btn-primary' onClick={()=>handleFilter()}>Filter</button>
            </div>
            <div className='d-flex justify-content-around'>
                <button className='btn btn-primary' onClick={() => setSearch("mobiles")}>Mobiles</button>
                <button className='btn btn-primary' onClick={()=> setSearch("Electronics")}>Electronics</button>
                <button className='btn btn-primary' onClick={()=> setSearch("laptops")}>Laptops</button>
          </div>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                data.length === 0 ? <h2>Loading...</h2> :
                    data.data.length === 0 ? <div style={{ height: "100vh", marginTop: "20vh" }}>
                        <div className='container d-flex justify-content-center align-items-center' style={{ height: "250px", width: "350px", backgroundColor: "#fff" }}>
                            {/* <h1><i class="fa-solid fa-cart-shopping fa-bounce fa-2xl" style={{color: "#cf0743", fontWeight : "600%"}}></i></h1> */}
                            <div className='container'>
                                <div className='ml-5' style={{ marginLeft: "100px", marginBottom: "70px", marginTop: "20px" }}><h1><i class="fa-solid fa-face-sad-tear fa-bounce fa-2xl" style={{ color: "#cf0743", fontWeight: "600%" }}></i></h1>
                                </div>
                                <div className='' style={{ marginLeft: "40px" }}><p>Item You are looking Not found</p></div>
                            </div>
                        </div>
                    </div>
                        :
                        <div className="container-cards m-5 ml-5 mr-5" id="product-cards" style={{ display: "flex", flexWrap: "wrap" }}>
                            {data.data.map((item, index) => (
                                <div key={index} className="col-md-3 py-3 py-md-0">
                                    <ProductCard item={item} />
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
