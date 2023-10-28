import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './ProductData.css'; // Ensure that you have the correct CSS file imported.

function ProductData() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const myCarousel = useRef(null);
    const carouselThumbs = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://price-api.datayuge.com/api/v1/compare/detail?id=${id}&api_key=4N9jvDnwnxSEN4lqkBHiVQ8SZXS3KWSUJnz`);
                setData(response.data.data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (myCarousel.current && carouselThumbs.current) {
            const handleSlide = (e) => {
                const index = parseInt(e.relatedTarget.getAttribute('data-bs-slide-to'), 10);
                setActiveIndex(index);
            };

            myCarousel.current.addEventListener('slid.bs.carousel', handleSlide);

            return () => {
                myCarousel.current.removeEventListener('slid.bs.carousel', handleSlide);
            };
        }
    }, []);

    const handleThumbsClick = (index) => () => {
        setActiveIndex(index);
    };

    return (
        <div>
            <NavBar />
            {data ? (
                <div className='container d-flex'>
                    <div className="container m-5" style={{ maxWidth: '800px' }}>
                      
                       <div className="carousel-container position-relative row p-5" style={{background : "#fff" , borderRadius : "0.7em"}}>
                       <div  className=''>
                            <div
                                id="myCarousel"
                                className="carousel slide m-3"
                                data-bs-ride="carousel"
                                ref={myCarousel}
                            >
                                <div className="carousel-inner">
                                    {data.product_images.map((image, index) => (
                                        <div
                                            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                                            key={index}
                                        >
                                            <img src={image} className="d-block w-100" alt={`Carousel Item ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div
                                id="carousel-thumbs"
                                className="carousel slide"
                                data-bs-ride="carousel"
                                ref={carouselThumbs}
                            >
                                <div className="carousel-inner">
                                    {data.product_images.map((image, index) => (
                                        <button
                                            className={`thumb col-3 col-sm-2 px-1 py-2 ${activeIndex === index ? 'selected' : ''}`}
                                            key={index}
                                            onClick={handleThumbsClick(index)}
                                        >
                                            <img src={image} className="img-fluid" alt={`Thumbnail ${index + 1}`} />
                                        </button>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carousel-thumbs"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carousel-thumbs"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                       </div>
                    </div>

                    <div className='container'>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className='mt-4'>&#x20b9; {data.product_mrp}</h4>
                                   <div style={{backgroundColor : "#fff" ,width: '650px', borderRadius : "0.7em"}}>
                                   <table className="table table-bordered table-striped table-hover d-flex justify-content-center ml-0 p-3" style={{ width: '650px' }}>
                                        <tbody>
                                            <tr>
                                                <th>Product Brand:</th>
                                                <td>{data.product_brand}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Name:</th>
                                                <td>{data.product_name}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Model:</th>
                                                <td>{data.product_model}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Category:</th>
                                                <td>{data.product_category}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Sub Category:</th>
                                                <td>{data.product_sub_category}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Ratings:</th>
                                                <td>
                                                    {data.product_ratings}
                                                    <span style={{ fontSize: "150%", color: "yellow" }}>&#9733;</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Available Colors:</th>
                                                <td>{data.available_colors.join(", ")}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <h3 className=''>Store Comparisons:</h3>
                        <div className='d-flex'>
                            {data.stores.map((store, index) => {
                                const storeName = Object.keys(store)[0];
                                const storeData = store[storeName];
                                if (storeData.product_store) {
                                    return (
                                        <div key={index} className='m-3'>
                                            <div>
                                                <div className="store-link">
                                                    <Link
                                                        to={storeData.product_store_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img
                                                            src={storeData.product_store_logo}
                                                            alt={`${storeData.product_store} Logo`}
                                                            className="store-logo"
                                                        />
                                                    </Link>
                                                </div>
                                                <table className="comparison-table table table-bordered table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Attribute</th>
                                                            <th>Value</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Price</td>
                                                            <td>{storeData.product_price}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Offer</td>
                                                            <td>{storeData.product_offer === "" ? 0 : storeData.product_offer}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Color</td>
                                                            <td>{storeData.product_color}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delivery Cost</td>
                                                            <td>{storeData.product_delivery_cost}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Return Time</td>
                                                            <td>{storeData.return_time}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                        </div>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default ProductData;
