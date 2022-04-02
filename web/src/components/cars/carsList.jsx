
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
        
            <div className="row mb-5">

                {cars.map((car) =>
                    <CarItem {...car} key={car.id} />
                )}

            </div>
       
    );
}

export default CarList;