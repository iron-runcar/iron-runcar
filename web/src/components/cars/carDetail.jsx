import React from "react";
import { useParams } from "react-router";
import { getCarDetail } from "../../services/api-service";
import './cars.css';
import Carousel from "../carousel/carousel";
import CarOptions from "../car-options/car-options";


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
    const { image, brand, model } = car;

    return (

        <div className="container bg">

            <div className="bg-transparent d-flex">

                <div className="bg-1 position-relative">
                <img src="https://cardive.imgix.net/images/leafs-right.png?w=80&fm=webp" alt="" className="leaves position-absolute" />

                    <div className="position-absolute ms-5 mt-3 fw-bold fs-4 text-light ">{brand}</div>

                    <div className="row">
                        <div className="col-8">
                            <Carousel id="car-detail-carousel" images={image} />
                            <h5>Información {model}</h5>
                            <p>Coche de ocasión certificado y verificado por Bipi.

                                Ventajas de suscribirte a un coche de ocasión de Bipi: más económico, más flexibilidad y sin preocupaciones. El mantenimiento, seguro, ITV e impuestos están incluidos. Nuestros coches pasan revisión y se desinfectan antes de la entrega. Estado: verificados y certificados con un kilometraje entre 25,000 - 85,000 según stock y disponibilidad. Recuerda que siempre podrás cambiar de coche más adelante si tus necesidades cambian.

                                Combustible: gasolina y/o GLP.

                                Equipamiento<br />
                                Multimedia<br />
                                Bluetooth<br />
                                Volante multifunción<br />
                                Confort<br />
                                Climatizador automático<br />
                                Control de crucero<br />
                                Elevalunas eléctrico<br />
                                Seguridad<br />
                                Hill Holder<br />
                                ESC<br />
                                Airbags frontales, laterales, rodilla y de cortina<br />
                                Sensor presión neumáticos<br />
                                Acabado interior y exterior<br />
                                Llantas de aleación<br />
                                Tejido negro</p>
                        </div>
                        <div className="car-booking col-4 bg-light">
                            <CarOptions {...car} />
                        </div>
                    </div>


                   





                </div>
            </div>
        </div>
    )


}

export default CarDetail;