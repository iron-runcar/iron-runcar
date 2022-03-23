import React from 'react';
import './cars.css';



function CarItem({ brand, prices, image, model, permanence, price }) {
    return (

        <div className="col-md-3">
            <div className="card rounded m-2">
                <div className="card-image">
                    <span className="card-notify-badge font-weight-bold">{brand}</span>
                    <span className="card-notify-price d-flex justify-content-end">Desde <br></br> 
                       {price}€</span>
                    <img className="img-fluid" src={image[0]} alt={brand} />
                </div>
                <div className="card-image-overlay">
                    <span className="card-options-permanence"><small>Opciones {permanence}</small></span>
                </div>

            </div>
        </div>
    )
}
export default CarItem;