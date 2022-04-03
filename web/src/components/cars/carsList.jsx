import './cars.css';
import React, { useEffect, useState } from "react";
import { getBooking, getCars } from "../../services/api-service";
import CarItem from "./CarItem";



function CarList() {
    const [cars, setCars] = useState();

    useEffect(() => {
        getBooking()
            .then((response) => {
                const booking = response.data[0]

                getCars()
                    .then((response) => {
                        const cars  = response.data.filter(car => car.id !== booking?.car?.id)
                        setCars(cars)
                    })
                    .catch(error => console.error(error))
            })
    }, []);

   
    if (!cars) return <> </>

    return (
        <>
        <div className="d-flex w-100 mt-3">
        <h2 className="text-center m-auto"><b>Elige un modelo de coche que se adapte a tu día a día</b></h2>
    </div>
    <div className="d-flex w-100 mt-2">
        <h4 className="text-center m-auto fw-light mb-5">Tu coche por suscripción incluye impuestos, mantenimiento, seguro y asistencia.<br /> La flexibilidad y kilometraje a tu manera. </h4>
    </div>
        
            <div className="row mb-5">

                {cars.map((car) =>
                    <CarItem {...car} key={car.id} />
                )}

            </div>
        </>
       
    );
}

export default CarList;