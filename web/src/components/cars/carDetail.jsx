import React from "react";
import { useParams } from "react-router";
import { getCarDetail } from "../../services/api-service";
import { Link } from 'react-router-dom';
import './cars.css';
import Carousel from "../carousel/carousel";


function CarDetail() {

    const [car, setCar] = React.useState(null);
    const { id } = useParams(car);

    React.useEffect(() => {
        getCarDetail(id)
            .then((response) => {
                setCar(response.data);
            });
    }, [id]);

    if (!car) {
        return null;
    }

    console.log(car)
    const {image, brand} = car;
    
    return (
        <div className="d-flex bg-light rounded-2">
            <div className="d-flex flex-column">
                <Carousel id="car-detail-carousel" images={image} />
            </div>
            <div className="div">adios</div>
        
        
        </div>
    )
        
        
}

export default CarDetail;