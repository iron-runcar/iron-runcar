import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth-context';
import { booking } from '../../services/api-service';
import './car-options.css';


function CarOptions({ model, year, fuelType, horsePower, transmission, prices, id }) {

    const { user } = React.useContext(AuthContext);
    const navigate = useNavigate()
    const [priceWithPermanenceSelected, setPriceWithPermanenceSelected] = React.useState();

    function handleBooking() {
        booking(id, priceWithPermanenceSelected)
            .then(() => {
                console.log("ey")
                navigate("/profile")
            })
    }


    return (

        <div className="container">
            <h5 className="title mt-4"><strong>Configura tu suscripción</strong></h5>
            <h6 className="title mb-3">Elige modelo y flexibilidad</h6>

            <div className="rounded-3 p-3 d-flex flex-column">
                <h5 className="mb-3"><strong>{model}</strong></h5>
                <div className="d-flex justify-content-between mb-2">
                    <span><i className='fa fa-calendar'></i> {year}</span>
                    <span><i className='fa fa-star-half-o'></i> {fuelType}</span>
                    <span><i className='fa fa-gear'></i> {transmission}</span>
                    <span><i className='fa fa-tachometer'></i> {horsePower}CV</span>
                </div>
                <div className="d-flex justify-content-between">
                    {prices.map((priceWithPermanence, i) => {
                        return (
                            <div class="form-check-1" key={i}>
                                <input class="form-check-input opacity-0" type="radio" name="permanence" id={`permanence-${i}`} />
                                <label
                                    class="form-check-label text-center"
                                    onClick={() => {
                                        setPriceWithPermanenceSelected(priceWithPermanence)
                                    }}
                                    htmlFor={`permanence-${i}`}
                                >
                                    <small>{priceWithPermanence.permanence} meses</small>
                                    <div className="btn-prices border rounded p-2">{priceWithPermanence.price} €</div>


                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="booking pt-3 mt-4">
                <h5 className="title mb-4"><strong>Resumen de tu suscripción</strong></h5>

                <div className='d-flex rounded-3 align-items-end'>
                    <div className='col-9 ms-3 fs-5'>Cuota mensual </div>
                    <div className=" total fs-5 col-3">{priceWithPermanenceSelected?.price}€
        
                    </div>
                </div>

            </div>
            <div className="end d-flex">
                <div className="row col-12">
                    {user ? <button className='reserva pt-1 pb-1' onClick={handleBooking}>RESÉRVALO</button> :
                        <div className="d-flex col-12">
                            <div className="rl d-flex col-6 fs-6"><Link className="badge-1  bg-outline-success text-decoration-none ps-3 pe-3 pb-2 pt-2" aria-current="page" to="/register"><strong>Registrate</strong></Link></div>
                            <div className="rl d-flex col-6"><Link className="badge-1  bg-outline-success text-decoration-none ps-3 pe-3 pb-2 pt-2" aria-current="page" to="/login"><strong>Login</strong></Link></div>
                        </div>

                    }

                </div>
            </div>
        </div>
    );
}

export default CarOptions;