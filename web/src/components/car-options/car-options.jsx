import React from 'react';
//import { useState } from 'react';


function CarOptions({ model, year, fuelType, horsePower, transmission, prices, permanence}) {
    console.log(model)

    /*function HandleClick() {
        const [permanence, setPermanence] = useState();
    }*/

      
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
                                <input class="form-check-input opacity-0" type="radio"  name="permanence" id={`permanence-${i}`}/>
                                <label class="form-check-label text-center" /*onClick={HandleClick}*/ htmlFor={`permanence-${i}`}>
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
                        <p>{permanence}</p>
                    </div>
                </div>
                
                <div className='d-flex'>
                    <h4 className='col-8'>Cuota mensual </h4>
                    <div className="col-4">
                        <p>{permanence}</p>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default CarOptions;