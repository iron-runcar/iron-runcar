import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth-context';
import { booking } from '../../services/api-service';


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
            <h5 className="title">Configura tu suscripción</h5>
            <h6 className="title">Elige modelo y flexibilidad</h6>

            <div className="rounded-3 p-2 d-flex flex-column">
                <h5 className="">{model}</h5>
                <div className="d-flex justify-content-between">
                    <span><i className='fa fa-calendar'></i> {year}</span>
                    <span><i className='fa fa-gas'></i> {fuelType}</span>
                    <span><i className='fa fa-gear'></i> {transmission}</span>
                    <span><i className='fa fa-tachometer'></i> {horsePower}</span>
                </div>
                <div className="d-flex justify-content-between">
                    {prices.map((priceWithPermanence, i) => {
                        return (
                            <div class="form-check" key={i}>
                                <input class="form-check-input opacity-0" type="radio" name="permanence" id={`permanence-${i}`} />
                                <label
                                    class="form-check-label text-center"
                                    onClick={() => {
                                        setPriceWithPermanenceSelected(priceWithPermanence)
                                    }}
                                    htmlFor={`permanence-${i}`}
                                >
                                    <small>{priceWithPermanence.permanence} meses</small>
                                    <div className="border rounded p-3">{priceWithPermanence.price} €</div>


                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="booking pt-3">
                <h6 className="title">RESUMEN DE TU SUSCRIPCIÓN</h6>

                <div className="d-flex">
                    <h6 className='col-8'>Precio base al mes</h6>
                    <div className="col-4">
                        <p></p>
                    </div>
                </div>

                <div className='d-flex'>
                    <h4 className='col-8'>Cuota mensual </h4>
                    <div className="col-4">
                        <p>{priceWithPermanenceSelected?.price}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="row col-12">
                    {user ? <button onClick={handleBooking}>Resérvalo</button> :
                        <div className="d-flex col-12">
                            <div className="rl d-flex col-6 "><Link className="badge  bg-success" aria-current="page" to="/register">Registrate</Link></div>
                            <div className="rl d-flex col-6"><Link className="badge  bg-success" aria-current="page" to="/login">Login</Link></div>
                        </div>

                    }

                </div>
            </div>
        </div>
    );
}

export default CarOptions;