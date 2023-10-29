import React from 'react'
import { Link } from 'react-router-dom'
function ProductCard({item}) {
    return (
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
    )
}

export default ProductCard