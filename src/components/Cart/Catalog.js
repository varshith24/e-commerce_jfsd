import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';

export default function Catalog() {
    // Define the state variables
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('ps4');
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
                console.log(data.data)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [search]);

    return (
        <div>
            <NavBar />
            <h1>Store</h1>
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

            {loading ? (
                <h2>Loading....</h2>
            ) : (
                <div class="container-cards" id="product-cards" style={{ display: "flex", flexWrap: "wrap" }}>
                    {data.data.map((item, index) => (
                        <div key={index} class="col-md-3 py-3 py-md-0">
                            {/* {console.log(item)} */}
                            <div class="card">
                                <img src={item.product_image} alt="" style={{
                                    width: '100%', // Set the width to 100% to ensure images fill the container
                                    height: '200px' // Set a fixed height for all images (adjust as needed)
                                }} />
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
                                        <img src={modal.product_image}  />
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
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
