import React from 'react';
import './cars.css';
import { Link } from 'react-router-dom';



function CarItem({ brand, prices, image, model }) {
    console.log(prices)
    const price = prices[prices.length - 1]?.price
    const permanence = prices.map((pricesWithPermanence)=> {
        const permanence =  pricesWithPermanence.permanence;
        if (permanence === "0"){
            return "sin permanencia"
        }else{
            return permanence
        }
        
        
    }).join(", ")
    return (

        <div className="col-md-3">
            <div className="card rounded m-2">
                <div className="container d-flex me-auto justify-content-between card-image">
                    <div><span className="card-notify-badge  me-auto font-weight-bold">{brand}</span></div>
                    <div><span className="card-notify-price  me-auto">Desde {price}€</span></div>
                    </div>
                    <Link className='detail d-flex' to="/cars/:id">
                    <img className="img-fluid" src={image[0]} alt={brand} />
                    </Link>
                
                <div className="card-image-overlay ms-2">
                    <span className="card-options-permanence fw-light"><small><strong>Opciones</strong> {permanence} meses</small></span>
                </div>

            </div>
        </div>
    )
}
export default CarItem;