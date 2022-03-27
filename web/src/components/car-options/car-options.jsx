import React from 'react';


function CarOptions({ model, year, fuelType, horsePower, transmission, prices }) {
    console.log(model)


    /*  const price = prices.map((allPrices) => {
         const price = allPrices.price;
         return price
     })  */
    /* const price = prices[prices.length - 1]?.price
    const permanence = prices.map((pricesWithPermanence) => {
        const permanence = pricesWithPermanence.permanence;
        if (permanence === "0"){
            return "sin permanencia"
        }else{
            return permanence
        }

    }).join(", ") */

    return (

        <div className="container">
            <h5 className="title">Configura tu suscripción</h5>
            <h6 className="title">Elige modelo y flexibilidad</h6>

            <div className="rounded-3 p-2 d-flex flex-column">
                <h5 className="">{model}</h5>
                <div className="d-flex justify-content-between">
                    <span>{year}</span>
                    <span>{fuelType}</span>
                    <span>{transmission}</span>
                    <span>{horsePower}</span>
                </div>
                <div className="d-flex justify-content-between">
                    {prices.map((priceWithPermanence, i) => {
                        return (
                            <div class="form-check" key={i}>
                                <input class="form-check-input" type="radio" name="permanence" id={`permanence-${i}`}/>
                                <label class="form-check-label text-center" htmlFor={`permanence-${i}`}>
                                    <small>{priceWithPermanence.permanence}</small>
                                    <div className="border rounded p-3">{priceWithPermanence.price}</div>
                                
                                    
                                </label>
                            </div>
                        )
                    })}
                </div>



            </div>
        </div>
    );
}

export default CarOptions;