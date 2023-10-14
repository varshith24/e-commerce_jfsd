import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

        fetchData(); // Call the fetchData function inside useEffect.

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>
            {/* <p>ProductData {id}</p> */}
            {data ? (
                <div >
                   { data.product_images.map((image)=>(
                            <img  src={image}/>
                    ))}
                 <div class="row">
                    {/* {console.log(data)} */}
                 <div class="col-md-6">
                     <table class="table table-bordered table-striped table-hover">
                         <tbody>
                             <tr>
                                 <th>product_brand:</th>
                                 <td>{data.product_brand}</td>
                             </tr>
                             <tr>
                                 <th>product_name :</th>
                                 <td>{data.product_name}</td>
                             </tr>
                             <tr>
                                 <th>product_model:</th>
                                 <td>{data.product_model}</td>
                             </tr>
                             <tr>
                                 <th>product_category:</th>
                                 <td>{data.product_category}</td>
                             </tr>
                             <tr>
                                 <th>product_sub_category:</th>
                                 <td>{data.product_sub_category}</td>
                             </tr>
                             <tr>
                                 <th>product_ratings:</th>
                                 <td>{data.product_ratings}<i class="fa-solid fa-star fa-bounce" style={{color: "#c8e65c"}}></i></td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
             </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductData;
