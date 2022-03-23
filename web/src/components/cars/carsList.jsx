
import React, { useEffect, useState } from "react";
import { getCars } from "../../services/api-service";
import CarItem from "./CarItem";



function CarList() {
    const [cars, setCars] = useState();

    useEffect(() => {
        getCars()
            .then((response) => {
                setCars(response.data)
            })
            .catch(error => console.error(error))
    }, []);

    if (!cars) return <> </>

    return ( 
    <div>

        
        {cars.map((car) => 
            <CarItem {...car} key={car.id} />
        )}

    </div>
    );
}

export default CarList;