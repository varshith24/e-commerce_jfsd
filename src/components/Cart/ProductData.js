import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function ProductData() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://price-api.datayuge.com/api/v1/compare/detail?id=${id}&api_key=4N9jvDnwnxSEN4lqkBHiVQ8SZXS3KWSUJnz`);
                setData(response.data.data);
                console.log(response.data.data); // Log the data fetched from the API.
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <NavBar />
            {/* <p>ProductData {id}</p> */}
            {data ? (
                <div className='container'>
                    {data.product_images.map((image) => (
                        <img src={image} />
                    ))}
                    <h4>&#x20b9; {data.product_mrp}</h4>
                    <div className='container'>
                        <div className="row">
                            {/* {console.log(data)} */}
                            <div className="col-md-6">
                                <table className="table table-bordered table-striped table-hover d-flex justify-content-center">
                                    <tbody>
                                        <tr>
                                            <th>product brand:</th>
                                            <td>{data.product_brand}</td>
                                        </tr>
                                        <tr>
                                            <th>product name :</th>
                                            <td>{data.product_name}</td>
                                        </tr>
                                        <tr>
                                            <th>product model:</th>
                                            <td>{data.product_model}</td>
                                        </tr>
                                        <tr>
                                            <th>product category:</th>
                                            <td>{data.product_category}</td>
                                        </tr>
                                        <tr>
                                            <th>product sub category:</th>
                                            <td>{data.product_sub_category}</td>
                                        </tr>
                                        <tr>
                                            <th>product ratings:</th>
                                            <td>{data.product_ratings}<span style={{ fontSize: "150%", color: "yellow" }}>&#9733;</span></td>
                                        </tr>
                                        <tr>
                                            <th>Available Colors :</th>
                                            <td>{data.available_colors.join(", ")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 className='mb-3'>Store Comparisons :</h3>
                                <div className='d-flex'>
                                {data.stores.map((store, index) => {
                                    const storeName = Object.keys(store)[0];
                                    const storeData = store[storeName];
                                    if (storeData.product_store) {
                                        return (
                                            <div key={index} className='m-5' >
                                                {/* <h4>{storeData.product_store}</h4> */}
                                                <div className="store-link">
                                                    <a
                                                        href={storeData.product_store_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img
                                                            src={storeData.product_store_logo}
                                                            alt={`${storeData.product_store} Logo`}
                                                            className="store-logo"
                                                        />
                                                    </a>
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
                                                            <td>{storeData.product_offer == ""? 0 :storeData.product_offer }</td>
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
                                        );
                                    }
                                    return null;
                                })}
                                </div>
                            </div>
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
