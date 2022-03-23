import React from 'react';
import { Link } from 'react-router-dom';



function CarItem({ brand, year, price, kilometers, image }) {
    return (
        <div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Low KMS</span>
                        <span className="card-notify-year">{year}</span>
                        <img className="img-fluid" src={image[0]} alt={brand} />
                    </div>
                    <div className="card-image-overlay m-auto">
                        <span className="card-detail-badge">Used</span>
                        <span className="card-detail-badge">{price}</span>
                        <span className="card-detail-badge">{kilometers}</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5>{brand}</h5>
                        </div>
                        <Link className="ad-btn" to="/">View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarItem