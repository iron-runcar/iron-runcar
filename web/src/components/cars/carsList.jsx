import { Link } from 'react-router-dom';
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
        <Link className='detail d-flex text-decoration-none' to="/cars/:id">
            <div className="d-flex">

                {cars.map((car) =>
                    <CarItem {...car} key={car.id} />
                )}

            </div>
        </Link>
    );
}

export default CarList;